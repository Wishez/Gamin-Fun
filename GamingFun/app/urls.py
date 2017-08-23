from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^log_in/$', views.log_in, name='log_in'),
    url(r'^register/$', views.register, name='register'),
    url(r'^change_password/$', views.change_password, name='change_password'),
    url(r'^change_email/$', views.change_email, name='change_email'),
    url(r'^log_out/$', views.log_out, name='log_out'),
    url(r'^subscribe/$', views.subscribe, name='subscribe'),
    url(r'^recover_password/$', views.recover_password, name='recover_password'),
    # url(r'^replanish_balance/$', views.replanish_balance, name='replanish_balance'),
    url(r'^change_user_avatar/$', views.change_user_avatar, name='change_user_avatar'),
    url(r'^get_user_last_payment/$', views.get_user_last_payment, name='get_user_last_payment'),
]