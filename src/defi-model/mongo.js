from datetime import datetime
from typing import Collection

import mongoengine
from decouple import config
from mongoengine import *


def set_default_host(host):
    mongoengine.connection.DEFAULT_HOST = host


set_default_host(config('MONGO_URI', 'localhost'))


class UpdatedAtField(DateTimeField):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, default=datetime.now, **kwargs)


class DocumentMeta(mongoengine.base.TopLevelDocumentMetaclass):
    objects: QuerySet

    def get_collection(cls: Document) -> Collection:
        return cls._get_collection()

    def bulk_write(cls, requests, **kwargs):
        return cls.get_collection().bulk_write(requests, **kwargs)


class BaseDocument(Document, metaclass=DocumentMeta):
    meta = {'abstract': True}

    @property
    def fields(self) -> dict:
        return self.__class__._fields

    def save(self, *args, **kwargs):
        for fname, ftype in self.fields.items():
            if ftype == UpdatedAtField:
                self.__setattr__(fname, datetime.now())
        return super(BaseDocument, self).save(*args, **kwargs)
