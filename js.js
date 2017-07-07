
$( window ).load(function() {

		//EDIT THE DAYS OBJECT TO EDIT ALL DATA ABOUT THE DIFFERENT DAYS
		//HOW TO:
		/*
		/*
		'2016-08-24': {
			title: 'Intro i de första kurserna, case och hur-man-går-på-sittning-sittning',
			body: 'Programinfo mellan 8.00 och 10.00, därefter introduktion till Industriell ekonomi och endimensionell analys. Programmet bjuder på lunch och på eftermiddagen är det Case. På kvällen är det dags för den första sittningen.<br><br>Klädkod sittning: Bruten kavaj<br><br>&ldquo;Sittning betyder middag med fest<br>Du som ny är vår hedersgäst<br>Ett första nationsbesök söderöver<br>Vi ska lära dig allt du behöver&rdquo;',
			dresscode: 'Bruten kavaj',
			fb: 'https://www.facebook.com/events/715506565256496/',
			kl: '18:00(..)',
			map: '55.7094832,13.2085505',
		},*/
		$('.pic').fadeIn(1500);
		var days = {
			'Vecka 0': {
				},
				'2016-08-22': {
					title: 'Upprop, rundavandring och phaddermys',
					body: 'Upprop i Kårhusets Aula och rundvandring för att lära känna campus, därefter i tryggt förvar hos phaddrarna.',
					map: '55.712472,13.209341',
				},
				'2016-08-23': {
					title: 'Framtidens ingenjörer, Ouvvepåtagning och straffvarvet',
					body: 'Dagen börjar med inspiration från framtidens ingenjörer klockan 08:00 och sedan blir det lunch på Västgöta nation, phaddrarna ser till att ni hittar rätt. Eftermiddag fortsätter sedan med framtidens ingenjörer och vid 16:15 blir det Ouvvepåtagning då ni för första gången för bära den vinröda färgen med stolthet.<br><br>&ldquo;Det kan ibland vara svårt att förstå<br>Men Lund erbjuder mer än LTH<br>Med ouverall som ny fängslande stass<br>Bjuder Ivent på en kväll av högsta klass&rdquo;',
					map: '55.709428,13.209777',
				},
				'2016-08-24': {
					title: 'Intro i de första kurserna, case och hur-man-går-på-sittning-sittning',
					body: 'Programinfo mellan 8.00 och 10.00, därefter introduktion till Industriell ekonomi och endimensionell analys. Programmet bjuder på lunch och på eftermiddagen är det Case. På kvällen är det dags för den första sittningen.<br><br>&ldquo;Sittning betyder middag med fest<br>Du som ny är vår hedersgäst<br>Ett första nationsbesök söderöver<br>Vi ska lära dig allt du behöver&rdquo;',
					dresscode: 'Bruten kavaj',
					map: '',
				},
				'2016-08-25': {
					title: 'Fotografering, besök hos KFS, Dataintro och Phaddermys',
					body: 'Fotografering på undervåningen i Studiecentrum klockan 08:00 och därefter besök hos KFS. Klockan 10.00 börjar dataintro där du får lära dig hur du använder LTHs datorer, skrivare och Ladok. På kvällen får du tid att mysa med din Phaddergrupp.',
					kl: '08:00',
					map:'55.7115432,13.2095175',
				},
				'2016-08-26': {
					title: 'Övning i matematik, inspiration från AlumnI och Permission',
					body: 'Dagen 09:00 börjar med information om hur du läser matematik på LTH som sedan följs av en övning i matematik. Efter lunch blir det en inspirationsföreläsning med Alumni och vid 15 åker ni på permission.<br><br>&ldquo;En resa hör till ett äventyr<br>Det är okänt vart du kosan styr<br>De enda som vet är Styrelsen<br>Det dröjer till lördag innan du kommer hem&rdquo;',
					dresscode: 'O&ouml;mma kläder',
				},
				'2016-08-27': {
					title: 'Hemkomst, stadsvandring och ED-dischot',
					body: 'Hemkomst till Lund under dagen direkt följt av start av den legendariska poängjakten genom hela Lund. Kvällen avslutas med utomhusrejv som Elektro- och Data-sektionen annordnar.<br><br>&ldquo;Det är dags att visa att din phaddergrupp är den bästa<br>Samla poäng är uppdraget nästa<br>På kvällen väntar fest med hela TLTH<br>Fler färger än vinröd på ouvven kan man få<br>Offra en bit av ditt ena byxben<br>Du kan få en vän från en ny sektion sen&rdquo;',
					dresscode: 'Ouvve och temakl&auml;dsel',
				},
				'2016-08-28': {
					title: 'Frukost, high five och Nolles&ouml;ndag',
					body: 'Efter en lång lördag blir det frukost med phaddergrupperna och en söndag med aktiviteter tillsammans med Maskinsektionen.<br><br>&ldquo;Phaddrarna står för din frukostkonsumtion<br>Nollesöndagen är en långtgående tradition<br>Soffor från hela M-huset dras ut<br>Efter detta är första nollningsveckan slut&rdquo;',
					dresscode: 'Ouvve och temakl&auml;dsel',
					map: '55.709488,13.208860',
				},
			'Vecka 1': {
				},
				'2016-08-29': {
					title: 'Indek, Endim, motivation fr&aring;n SVL och inskrivningen',
					body: 'Dagen börjar med Indek i MA:6 klockan 08.00 och sedan Endim i E:A klockan 10.00. Vid 15:00 kommer studievägledningen att tala om motivation.',
					kl: '08:00',
					map:'55.711138,13.2077437',
				},
				'2016-08-30': {
					title: 'Ouvvetisdag, Endim, K&aring;rkamp, Indek och I <3 M',
					body: 'Tisdag och därmed Ouvve, det gäller att visa vilken sektion du tillhör och du får chans att bära vinrött med stolthet. Endim i MA:7 klockan 10.00 och på lunchen är det dags för den första kårkampen vilken I-sektionen givetvis skall vinna. Det kommer finnas möjlighet att köpa lunch för en billig peng och vid 15:00 är det Indek i MA:6. På kvällen är det traditionsenligt sittning med vår kära systersektion, Maskinsektionen.<br><br>&ldquo;Vi har grannar i huset som läser M<br>Här har du chansen att lära känna dem<br>Tjejer och killar på varsitt håll får vara<br>Återförenas när man med sittningarna är klara&rdquo;',
					dresscode: 'Ouvve under dagen och kostym/cocktailkl&auml;nning till kv&auml;llen',
				},
				'2016-08-31': {
					title: 'Indek, FISS, Draggning, Partybr&auml;nnboll och ING-vasion',
					body: 'Indek klockan 08.00 och vid 17:00 är det dags för FISS och draggning. Vid 19.00 drar partybrännboll igång och klockan 22.00 öppnar insläppet till ING-vasion.<br><br>FISS<br>&ldquo;Här finns en chans att ge I-sektionen stor ära<br>Kiosken kan vår färg få bära<br>Det handlar om att bada och hitta rätt<br>Vi måste hjälpas åt på alla sätt&rdquo;<br><br>Partybrännboll<br>&ldquo;Vinbrännboll är en sport med historia så lång<br>Nu får du lära dig hur det går till en gång&rdquo;',
					dresscode: 'Ouvve, badkl&auml;der och snabba skor',
					map:'55.710316,13.208259',
				},
				'2016-09-01': {
					title: 'Indek, Endim och Studiekv&auml;ll',
					body: 'Föreläsning i Indek i MA:6 klockan 10:00 och sedan föreläsning i Endim i E:A klockan 13.00, kvällen erbjuder en tid ägnad åt studier tillsammans med SRI vilken börjar vid 17:00.<br><br>&ldquo;Studier kan vara svårt utan mammas tjat<br>Här finns lärare och kvällsmat&rdquo;',
				},
				'2016-09-02': {
					title: 'ESTIEM och byggkv&auml;ll',
					body: 'Klockan 12.00 bjuder ESTIEM in till lunchföreläsning och på kvällen blir det bygg.<br><br>&ldquo;Ibland så krävs det mer än en dag<br>Att få saker bra när man jobbar i lag&rdquo;',
				},
				/**  å &aring; ä &auml; ö &ouml; " &ldquo; " &rdquo; */
				'2016-09-03': {
					title: 'Sillafrukost och FlyING',
					body: 'Klockan 10.00 är det dags för en klassisk frukost för att se till att vara ordentligt laddad inför en lång dag i Helsingborg. Bussarna avgår vid 14.00.<br><br>&ldquo;I Helsingborg det ingenjörer också är<br>Vi tar oss med buss och hälsar på där<br>Farkost har varje sektion byggt varsin<br>Ta dig längst över sundet och vinn!&rdquo;',
					dresscode: 'Ouvve',
					map:'56.0498334,12.6885934',
				},
				'2016-09-04': {
					title: 'Nollan vilar',
					body: 'När du återvänder till Lund så får du här en hel dag att ladda batterierna och kanske ta en välförtjänt sovmorgon.',
					dresscode: 'Ouvve',
				},
			'Vecka 2': {
				},
				'2016-09-05': {
					title: 'Indek, Endim, Lunchbeat och uppdragskväll',
					body: '08.00 börjar förläsning i Indek i MA:6 därefter föreläsning i Endim i E:A. På lunchen har du möjlighet att röra på dig lite och lära dig de andra sektionernas nolledanser.',
				},
				'2016-09-06': {
					title: 'Ouvvetisdag, Endim, Indek och studiekväll',
					body: 'Föreläsning i Endim i E:A klockan 10.00 därefter är det dags för kårkamp tisdag och således dags att visa vilken färg som lyser starkast. Vid 15.00 är det föreläsning i Indek som sedan följs av en studiekväll med mat.',
				},
				'2016-09-07': {
					title: 'Indek och Toga',
					body: 'Föreläsning klockan 08.00 i MA:6 och sedan är det dags för en tradition som härstammar från de gamla grekerna.<br><br>&ldquo;För din klädsel får du ett lakan vika<br>Vet du inte hur brukar google inte svika<br>Skriv how to fold a toga i sökfältet<br>Så leker vi grekiska gudar i partytältet&rdquo;',
					dresscode: 'Toga',
				},
				'2016-09-08': {
					title: 'Indek, Endim och Kårestival',
					body: 'Föreläsningen i Indek börjar 10.00 i MA:6, efter lunch är det Endim i E:A och klockan 15.00 drar Kårestivalen igång där du kan möta hela studentlund, måla märke och köpa tillbehör till din overall.<br><br>&ldquo;I Lund finns mer än teknologer och kår<br>Idag får de visa upp sig allt vad de förmår<br>FISS målar märken på marken<br>Nya tygmärken kan man köpa i parken&rdquo;',
					map:'55.710636,13.207261',
					dresscode: 'Ouvve',
				},
				'2016-09-09': {
					title: 'Endim, Indek och Nollefredag',
					body: 'Endim i E:A klockan 08.00 följt av Indek i MA:6. Vid 16.00 samlas vi för en gemensam marsch för att njuta av ØP0 och cheer.<br><br>&ldquo;Bakom Lophtet finns en stor gräsplätt<br>Att vara många här är ganska lätt<br>Tur är det för här ska hela LTH<br>När cheer och ØP0 syns heja på&rdquo;',
					map:'55.717282,13.212298',
					dresscode:'Ouvve',
				},
				'2016-09-10': {
					title: 'Nollelördag',
					body: 'Champagnefrukost klockan 08:00 följt av gemensamt tågande ner till Lundagård vid 10:00, här är det dags för uppdragen att visa upp sig och alla talanger bland I-sektionens medlemmar. 19:00 är det sittning tillsammans med din fantastiska uppdragsgrupp och på kvällen har Maskinsektionen eftersläpp i Gasque.<br><br>&ldquo;Med frukost vid M-huset vi startar<br>Efter det ett paradtåg från I sig artar<br>Med Lundagård som mål vi har<br>För att heja på lådbilsrally med alla krafter som är kvar<br>Efter väntar luphtband och ballongistapult<br>På kvällen festar vi med alla uppdragsgrupper för fullt&rdquo;',
					dresscode: 'Ouvve',
					map:'55.705494,13.194613',
				},
				'2016-09-11': {
					title: 'Regatta och regattabal',
					body: 'Samling 12:00 vid katedralskolan för gemensamt tåg upp till Sjøn Sjøn och Regatta. Klockan 18.00 är det gemensam förfest för att tagg inför Regattabalen som öppnar 20.00.<br><br>&ldquo;Återigen råder på LTH ett nytt klimat<br>Ett sjöslag i sjøn Sjøn väntar som äkta pirat<br>Din båt bör vara riktigt stabil<br>För att bevara I-sektionens heder med stil<br>Är det så att du inte har badat i sjøn Sjøn än<br>Får alla chansen idag igen&rdquo;',
					dresscode: 'Ouvve',
				},
				'Vecka 3': {
					},
					'2016-09-12': {
						title: 'Indek, Endim och Studiekväll',
						body: 'Indek i MA:6 klockan 08:00, därefter Endim i E:A. Klockan 17.00 är det Studiekväll igen.',
					},
					'2016-09-13': {
						title: 'Ouvvetisdag, övning i Indek, Endim, Kårkamp, WaDerloo och Rasten',
						body: 'Tisdag innebär en sak och det är overall. Dagen startar 08.00 med övning i Indek följt av föreläsning i Endim i E:A. På Lunchen är det dags för den sista kårkampen och nu ska I visa vart skåpet skall stå. Vid 15.00 är det föreläsning i Indek i MA:6.<br><br>Klockan 17:00 är det dags för det legendariska och gigantiska vattenkrig som sedan följs av Rasten som annordnas tillsammans med Ivent.<br><br>&ldquo;Dags för en tävling, i idrott den här gången<br>Ladda upp med bästa phaddergruppsången<br>Ta med vattenflaskan och pannbandet<br>Tid att kora bästa phaddergruppen i landet&rdquo;',
						dresscode: 'Ouvve och temaklädsel'
					},
					'2016-09-14': {
						title: 'Indek och VI på ZOO-sittning',
						body: '08.00 börjar föreläsning i Indek och vid 19.00 har vi sittning tillsammans med den underbara väg- och vattensektionen med tema “VI på zoo”.<br><br>&ldquo;Det finns en sektion som heter V<br>Flest på LTH är de<br>Tillsammans ska vi gå på ZOO<br>Är du djur eller besökare tro?&rdquo;',
						dresscode: 'Djur-I-bur, ej Ouvve',
					},
					'2016-09-15': {
						title: 'Indek, Endim och Phaddermys',
						body: 'Föreläsning i Indek 08.00 i MA:6 och efter lunch är det Endim i E:A. På kvällen är det dags för ditt sista officiella Phaddermys.',
					},
					'2016-09-16': {
						title: 'Endim, Indek och Nollegasque',
						body: 'Endim i E:A klockan 08.00 följt av Indek i MA:6. Klockan 17.00 är det dags för Nollegasque.<br><br>&ldquo;Det här blir vår nollnings stora fest<br>Självklart kommer den att bli allra bäst<br>En trerättersmiddag ska göra oss mätta<br>Sen ska du gå från nolla till etta<br>Glada, snälla, helt underbara<br>Det tror vi varje etta kommer att vara&rdquo;',
						dresscode: 'Mörk kostym',
						map:'55.712418,13.209095'
					},
					'2016-09-17': {
						title: 'Gasquebrunch',
						body: 'Efter en lång fredag kan det vara gott att inte behöva ordna frukost själv, vid 11.00 blir det brunch.',
					},
					'Vecka 4': {
						},
						'2016-09-20': {
							title: 'Studiekväll med SRI',
							body:'SRI anordnar en trevlig studiekväll med start kl. 17:00.',
						},
						'2016-09-24': {
							title: 'Skidfesten',
							body: 'Klädkod: After ski<br><br>&ldquo;Understället på trots att det är september<br>Bränna, fartdräkt, det är ikväll det händer<br>Nollningen är ännu inte riktigt förbi<br>När Lophtet förvandlas till afterski&rdquo;',
							dresscode: 'After ski',
							map:'55.717397,13.211225',
						},
					'Vecka 5': {
						},
						'2016-09-28': {
							title: 'Sensation red',
							body: 'Klädkod: rött',
							dresscore: 'rött',
						},
						'2016-10-01': {
							title: 'Stora pluggbrunchen och S.A.L.A.S.',
							body: 'Klädkod kväll: Ouvve',
							dresscode: 'Ouvve på kvällen',
						}
		};

		var daysHTML = '';

		var dayName = {
			0: 'SÖN',
			1: 'MÅN',
			2: 'TIS',
			3: 'ONS',
			4: 'TOR',
			5: 'FRE',
			6: 'LÖR'
		};
		//var counter = 0;
		for (var date in days) {

			if (date.indexOf("Vecka") !== -1) {
				daysHTML += '<ul class=""><li class="week">'+date+'</li>';
			} else {
				var dday = days[date];
				var todayDate = new Date();
				var inputDate = new Date(date);
				daysHTML += '<li class="dayli '+
						(inputDate.setHours(0,0,0,0) == todayDate.setHours(0,0,0,0) ? ' today' : '')+
						(inputDate.setHours(0,0,0,0) < todayDate.setHours(0,0,0,0) ? ' past' : '')+'">';

					daysHTML += '<div class="header">';
						daysHTML += '<span class="day">'+dayName[inputDate.getDay()]+'</span>';
						daysHTML += '<span class="triangle"></span>';
						daysHTML += '<span class="title">'+dday.title+'</span>';
					daysHTML += '</div>';

					daysHTML += '<div class="slider invis">';
						daysHTML += '<span class="triangle-left"></span>';
						daysHTML += '<span class="triangle-right"></span>';

						daysHTML += '<div class="top">';
							daysHTML += '<span class="date">'+dayName[inputDate.getDay()] +' '+ inputDate.getDate() + '/' + (inputDate.getMonth() + 1) +'</span>';
							if (dday.kl) {
								daysHTML += '<span style="margin-left: 2px;"> kl:'+dday.kl+'</span>';
							}
							if (dday.fb) {
								daysHTML += '<div class="fb"><a href='+dday.fb+'></a></div>';
							}
							if (dday.dresscode) {
								daysHTML += '<span class="dresscode">Klädsel: '+dday.dresscode+'</span>';
							}
						daysHTML += '</div>';

						daysHTML += '<div>';
							daysHTML += '<p class="bread">'+dday.body+'</p>';
						daysHTML += '</div>';

						if(dday.map){
							daysHTML += '<div class="map-container"><a href="https://www.google.com/maps/?q='+dday.map+'"><img class="map" src="http://maps.google.com/maps/api/staticmap?center='+dday.map+'&zoom=16&size=640x200&sensor=false&markers='+dday.map+'&key=AIzaSyBoM1dFFfBz4ToHgSm-XdxdDYfDnGXav-o" width="640" height="200"/></a></div>'
						}
						//counter++;
					daysHTML += '</div>';
				daysHTML += '</li>';
			}

		}


		$('.days').html(daysHTML);

		setTimeout(function(){
			/*
			if ($('.today').length !== 0) {
				$('html, body').animate({
					scrollTop: $('.today').position().top - 30
				}, 500);
			}*/
			$('.hello').fadeOut(800);
		}, 1500);



    $(window).scroll(function() {
        if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
          $('toTop').toggle();
        }
    });


		$('.toTop').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		})


		//Make America Great Again
		$('.header').on('click', function() {
			//$(this).siblings(".slider").removeClass( "invis" );

			var ua = navigator.userAgent.toLowerCase();
			var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
			if(isAndroid) {
			  $(this).siblings(".slider").toggle(0);
			}
			else{
				$(this).siblings(".slider").slideToggle('1000 swing');
			}
		});
});
