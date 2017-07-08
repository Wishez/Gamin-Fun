# -*- encoding: urf-8 -*-
from django.utils import timezone
from datetime import datetime

# Функция пополнения баланса
def replanishBalance(self, credits):
    # Пополнение баланса на указанное колличество кредитов.
    self.balance += credits
    # Сохранение изменённого состояния.
    self.save()


# Функция, расчитывающая только время истечения подписки,
# принимающая модель пользователя и выбранные им коли-
# чество месяцев.
def increaceSubscribeTime(self, quantity_monthes):
    currActiveTime = self.active_until
    year = currActiveTime.year
    month = currActiveTime.month
    day = currActiveTime.day
    hour = currActiveTime.hour
    minute = currActiveTime.minute

    # Выбранны чётко 12 месяцев
    if quantity_monthes == 12:
        year += 1
    # Если не чётко 12 месяцев
    else:
        # Но в сумме больше, чем 12
        if month + quantity_monthes > 12:
            # Подписка окончится в следующем году
            year += 1
            # Но не в первом месяце.
            month = month - quantity_monthes
        # Ровно 12-й месяц  означает истечение подписки
        # первого месяца следующего года.
        elif month + quantity_monthes == 12:
            year += 1
            month = 1
        else:
            # Окончание подписки в текущем году.
            month += quantity_monthes
    # Присвоение расчитанного времени окончание подписки
    # рассчитоваемого времени окончания подписки игрока.
    self.active_until = datetime(year, month, day, hour, minute)

# Оплата игроком подписки, с возможной скидкой.
def payForSubscribe(self, quantity_monthes):
    # При покупки нескольки месяцев, даётся скидка
    # Если быть точнее 12m - 13%, 6m - 7%
    # Подписка стоит 150 рублей.
    if quantity_monthes == 12:
        self.balance -= (quantity_monthes * 150) - ((150 / 100 * 13) * quantity_monthes)
    if quantity_monthes == 6:
        self.balance -= (quantity_monthes * 150) - - ((150 / 100 * 7) * quantity_monthes)
    else:
        self.balance -= quantity_monthes * 150

# Подписывает пользователя по его желанию
def subscribe(self, quantity_monthes=0):
    quantity_monthes = int(quantity_monthes)
    # Проверка количества кредитов
    response = {
        'message': '',
        'activeUntil': self.active_until,
        'balance': self.balance,
        'status': self.status
    }
    if self.balance >= (quantity_monthes * 150):
        # Подписка активированна - нужно добавить к текущему времени
        # выбранное количество месяцев
        if self.active_until is not None:
            # Подписка продливается.
            increaceSubscribeTime(self, quantity_monthes)
            # Оплата подписки
            payForSubscribe(self, quantity_monthes)
            message = 'Вы продлили подписку до %s' % self.active_until
        # Подписка не активированна - время окончание подписки нет.
        # Нужно установить начальное время приобретения подписки.
        else:
            # Подписка активируется.
            self.active_until = timezone.now()
            increaceSubscribeTime(self, quantity_monthes)
            # Оплата подписки
            payForSubscribe(self, quantity_monthes)
            # Статус активируемой подписки
            message = 'Вы подписались на сервер до %s' % self.active_until
        self.status = 'Оплачено'
        self.save()
        # Сохраняются измённые данные.
        response['message'] = message
        # response['activeUntil'] = self.active_until
        # response['status'] = self.status
        # response['balance'] = self.balance

        # Транзакция прошла успешно.
        return(response)
    # Не хватает денег на счету.
    response['message'] = 'Не достаточно кредитов на счету. Ваш баланс — %(balance)s' % response
    return(response)


