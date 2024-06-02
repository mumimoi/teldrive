package retry

import (
	"context"
	"fmt"

	"github.com/go-faster/errors"
	"github.com/gotd/td/bin"
	"github.com/gotd/td/telegram"
	"github.com/gotd/td/tg"
	"github.com/gotd/td/tgerr"
)

var internalErrors = []string{
	"Timedout",
	"No workers running",
	"RPC_CALL_FAIL",
	"RPC_MCGET_FAIL",
	"WORKER_BUSY_TOO_LONG_RETRY",
	"memory limit exit",
	"connection dead",
	"engine was closed",
}

type retry struct {
	max    int
	errors []string
}

func isErrorMatch(err error) bool {
	for _, internalError := range internalErrors {
		if errors.Is(err, errors.New(internalError)) {
			return true
		}
	}
	return false
}

func (r retry) Handle(next tg.Invoker) telegram.InvokeFunc {
	return func(ctx context.Context, input bin.Encoder, output bin.Decoder) error {
		retries := 0

		for retries < r.max {
			if err := next.Invoke(ctx, input, output); err != nil {
				if tgerr.Is(err, r.errors...) || isErrorMatch(err) {
					retries++
					continue
				}
				return errors.Wrap(err, "retry middleware skip")
			}

			return nil
		}

		return fmt.Errorf("retry limit reached after %d attempts", r.max)
	}
}

func New(max int, errors ...string) telegram.Middleware {
	return retry{
		max:    max,
		errors: append(errors, internalErrors...),
	}
}
