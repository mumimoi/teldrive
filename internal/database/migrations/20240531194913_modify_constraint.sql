-- +goose Up
-- +goose StatementBegin
ALTER TABLE teldrive.uploads DROP CONSTRAINT IF EXISTS uploads_pk;
ALTER TABLE teldrive.uploads DROP CONSTRAINT IF EXISTS uploads_pkey;
ALTER TABLE teldrive.uploads ADD CONSTRAINT uploads_pkey PRIMARY KEY (part_id,channel_id);
-- +goose StatementEnd