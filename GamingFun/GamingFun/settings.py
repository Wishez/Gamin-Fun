"""
Django settings for GamingFun project.

Generated by 'django-admin startproject' using Django 1.11.3.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'pi#q+m1n0d+g!0e)g@%)cwz-2ax=omc5j2hrvp66q91_(9pi5&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True 

ALLOWED_HOSTS = [
    'localhost',
    'gaming-fun.ru',
    'gamingfun.shining-present.ru'
]


# Application definition
# 'robokassa',
INSTALLED_APPS = [
    'robokassa',
    'captcha',
    'grappelli',
    'rest_framework',
    'django_cron',
    'api_v0.apps.ApiV0Config',
    'app.apps.AppConfig',
    'minecraft.apps.MinecraftConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]




MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'GamingFun.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, '/app/templates')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'GamingFun.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'gm',
        'USER': 'gm',
        'PASSWORD': 'demonstration',
        'HOST': '',
        'PORT': '5432'
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'ru-RU'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
DEFAULT_FROM_EMAIL = 'support@gamingfun.ru'
EMAIL_HOST = 'localhost'
EMAIL_PORT = 25
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
EMAIL_USE_TLS = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# CSRF
CSRF_USE_SESSIONS = True

RECAPTCHA_PUBLIC_KEY = '6Lf2rigUAAAAAEb88AaevLR7gTwGhmUb5sQBOoMZ'
RECAPTCHA_PRIVATE_KEY = '6Lf2rigUAAAAADYSz_jTT0NDWZjCXQG9RjZS2H7z'


ROBOKASSA_LOGIN = 'gamingfun'
ROBOKASSA_PASSWORD1 = 'vAq0WmIWY1dqa07W9miw'
ROBOKASSA_PASSWORD2 = 'x9Op3Esv3mJpXa43qkTO'
ROBOKASSA_TEST_PASSWORD1 = 'kxlT5Y1zmfYV2jDzmA73'
ROBOKASSA_TEST_PASSWORD2 = 'tNF79oTAcU6M33MzLuPv'
# Используется ли метод POST при приеме результатов от ROBOKASSA. По умолчанию - True. Считается, что для Result URL, Success URL и Fail URL выбран один и тот же метод.
ROBOKASSA_USE_POST = True

# Использовать ли строгую проверку (требовать предварительного уведомления на ResultURL). По умолчанию - True.
ROBOLASSA_STRICT_CHECK = False

ROBOKASSA_TEST_MODE = True

# Cписок (list) названий дополнительных параметров, которые будут передаваться вместе с запросами. “Shp” к ним приписывать не нужно.
ROBOKASSA_EXTRA_PARAMS = ['username']

ROBOKASSA_SUCCESS_URL = '/minecraft/robokassa_success/'
ROBOKASSA_FAILURE_URL = '/minecraft/robokassa_failure/'

# url робокассы для тестового режима. Настройка предназначена для случая, когда в распоряжении не имеется доступного в интернете домена (например разработка на localhost) и вместо сервера робокассы необходимо использовать свой.
# ROBOKASSA_TEST_FORM_TARGET = ''

# Crons' tasks
CRON_CLASSES = [
    "minecraft.crons.WatchForUser",
]

# Mincraft's app constants
SUBSCRIBE_COST = 199
WHITELIST_SCRIPT = "/scripts/bash/whitelist_handler"