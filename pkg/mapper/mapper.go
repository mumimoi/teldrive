package mapper

import (
	"github.com/divyam234/teldrive/pkg/models"
	"github.com/divyam234/teldrive/pkg/schemas"
)

func ToFileOut(file models.File) *schemas.FileOut {
	var size int64
	if file.Size != nil {
		size = *file.Size
	}
	return &schemas.FileOut{
		Id:        file.Id,
		Name:      file.Name,
		Type:      file.Type,
		MimeType:  file.MimeType,
		Category:  file.Category,
		Encrypted: file.Encrypted,
		Size:      size,
		Starred:   file.Starred,
		ParentID:  file.ParentID,
		UpdatedAt: file.UpdatedAt,
	}
}

func ToFileOutFull(file models.File) *schemas.FileOutFull {

	var channelId int64

	if file.ChannelID != nil {
		channelId = *file.ChannelID
	}

	return &schemas.FileOutFull{
		FileOut:   ToFileOut(file),
		Parts:     file.Parts,
		ChannelID: channelId,
		Encrypted: file.Encrypted,
	}
}

func ToUploadOut(in *models.Upload) *schemas.UploadPartOut {
	out := &schemas.UploadPartOut{
		Name:      in.Name,
		PartId:    in.PartId,
		ChannelID: in.ChannelID,
		PartNo:    in.PartNo,
		Size:      in.Size,
		Encrypted: in.Encrypted,
		Salt:      in.Salt,
	}
	return out
}
