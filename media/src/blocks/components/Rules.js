import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import { List } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const Rules = ({
}) => (
	<section className='rules'>
		<Title block='rules'
			text='Политика и правила наших серверов'
		/>
		<p> 
			На серверах <strong>не существует</strong> привата. Вы берете себе столько пространства для игры, сколько вам нужно, 
			в свою очередь мы будем стараться набирать на сервера только честных игроков, 
			в любом случае нарушитель будет <strong>забанен</strong>, ваши вещи вам <strong>вернут</strong>. 
		</p>
		<p>
			Нет <strong>никаких ограничений</strong> в крафте. Все моды которые есть &mdash; полностью играбельны.
			"0.8" карьеры только в мирах Mystcraft, на одного игрока <strong>не более двух миров</strong> &mdash; нарушение данного правила является <strong>очень серьезным</strong>, 
			игроку будет выдан <strong>бан</strong> без возрата средств.
		</p>
		<p>
			Не мешаем другим игрокам &mdash; не надо селиться рядом, доканывать игроков речами типо &#10077;Давай поиграем вместе?&#10078; или &#10077;Можно я буду жить рядом?&#10078; и т.п. 
			Если на вас будет много жалоб, вы также можете быть забанены, без возврата средств. 
		</p>
		<p>
			Мы считаем, что лучше заплатить за месяц игры и быть свободным <strong>в почти любой деятельности</strong> внутри игровых миров. 
			Вы получаете <strong>адекватное комьюнити</strong>, плюс <strong>полный доступ</strong> к крафтам модов без ограничений, а также <strong>молниеносную реакцию</strong> администрации на ваши проблемы. 
		</p>

		<List className="listRules" as='ol'>
			<List.Item as='li'><h1>Общие правила проекта</h1>
				<List.List as='ol'>
					<List.Item as='li'>Данный свод правил действует на всех майнкрафт серверах, на сайте и на форуме проекта GamingFun. Незнание данных правил не освобождает от ответственности за их нарушение. </List.Item>
					<List.Item as='li'>Все игроки, в том числе модераторы и администраторы, обязаны соблюдать данные правила. </List.Item>
					<List.Item as='li'>В случае нарушения правил другими игроками нужно связаться с администрацией с предоставлением доказательств нарушения (скриншоты, видео, переписка).</List.Item>
					<List.Item as='li'>При нарушении правил игроками администраторы или модераторы оставляют за собой право выбора наказания для нарушителя. Это может быть временная или постоянная блокировка аккаунта, а также иные санкции. </List.Item>
				</List.List>
			</List.Item>
			<List.Item as='li'><h1>Регистрация</h1>
				<List.List as='ol'>
					<List.Item as='li'>Любой игрок, зарегистрировавшийся на сайте или на форуме, автоматически соглашается с данным сводом правил и обязуется их исполнять.</List.Item>
					<List.Item as='li'> Запрещено регистрировать никнеймы, которые противоречат законодательству Российской Федерации, а также разжигают межнациональные конфликты. </List.Item>
					<List.Item as='li'> Запрещено регистрировать никнеймы, идентичные или очень похожие на никнеймы администрации серверов майнкрафт. </List.Item>
					<List.Item as='li'> Запрещено регистрировать более одного аккаунта (при обнаружении такого нарушения администрация вправе заблокировать все подобные аккаунты). </List.Item>
					<List.Item as='li'>Запрещено заходить с аккаунтов других игроков (будет расценено как нарушение пункта 2.4). </List.Item>
				</List.List>
			</List.Item>
			<List.Item as='li'><h1>Поведение на проекте</h1>
				<List.List as='ol'>
					<List.Item as='li'>Запрещено оставлять комментарии или посты, которые не несут никакой смысловой нагрузки. </List.Item>
					<List.Item as='li'>Запрещено оставлять комментарии или посты, которые разжигают расовые, межнациональные, религиозные или иные конфликты.</List.Item>
					<List.Item as='li'>Запрещено нецензурно выражаться или оскорблять других участников проекта. </List.Item>
					<List.Item as='li'> Запрещена реклама сторонних проектов, товаров и услуг в любом виде. </List.Item>
					<List.Item as='li'> Запрещено игнорировать требования администрации и обсуждать любые действия администрации. </List.Item>
					<List.Item as='li'>Запрещены любые угрозы в адрес других игроков и администрации Проекта </List.Item>
					<List.Item as='li'>Запрещено вводить игроков в заблуждение, выдавая себя за члена администрации или команды проекта. </List.Item>
				</List.List>
			</List.Item>
			<List.Item as='li'><h1>Общие правила игры на серверах</h1>
				<List.List as='ol'>
					<List.Item as='li'>Запрещено использование любых чит-программ, а также багов сервера и клиента игры Майнкрафт. </List.Item>
					<List.Item as='li'>О любых обнаруженных багах и недоработках игроки обязаны сообщать администрации сервера, а администрация, в свою очередь, обязана устранить все найденные баги и недоработки. </List.Item>
					<List.Item as='li'>Запрещены любые операции по продаже и покупке игровых ресурсов с использованием реальных денег или не игровых ценностей. </List.Item>
					<List.Item as='li'>Администрация имеет право не возвращать пожертвования (донат), потраченные на дополнительные привилегии.</List.Item>
					<List.Item as='li'>Раздача возможностей/ресурсов другим игрокам;</List.Item>
					<List.Item as='li'>На сервере строго запрещено гриферство!</List.Item>
				 </List.List>
			 </List.Item>
			 <List.Item as='li'><h1>Общение на серверах</h1>
				<List.List as='ol'>
					<List.Item as='li'>В игровом чате запрещены сообщения, в содержании которых имеется: <br />
						<strong>Флуд</strong> &mdash; много одинаковых сообщений подряд, или сообщения, не несущие смысловой нагрузки.<br />
						<strong>Злоупотребление</strong> текстом в верхнем регистре.
					</List.Item>	
				</List.List>
			 </List.Item>
		</List>
	</section>
);

export default Rules;