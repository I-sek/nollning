
$( window ).load(function() {

		//EDIT THE DAYS OBJECT TO EDIT ALL DATA ABOUT THE DIFFERENT DAYS
		$('.pic').fadeIn(1500);
		var days = {
			'Vecka 0': {},

			'2015-08-24': {
				title: 'Upprop, Phaddermys',
				body: 'Efter uppropet i kårhuset delas ni in i era phaddergrupper. Phaddrarna visar er runt på LTH och därefter tillbringar ni kvällen med att mysa och lära känna varandra.'
			},
			'2015-08-25': {
				title: 'Ouverallpåtagning,  After School',
				body: 'Nu är det äntligen dags för ouveraller, vid lunch säljs ouvvarna i MaskinerI:et och på kvällen är det dags att lära känna MaskinerI:et på årets första After School.'
			},
			'2015-08-26': {
				title: 'Sittning-sittning',
				body: 'Sittning-sittning bjuder på trevligheter och allt som hör sittningar till i M-foajén. Glöm inte leg, kårleg, nationsleg och sångbok.',
				dresscode: 'Bruten ouverall'
			},
			'2015-08-27': {
				title: 'Tetra Pak, AktU-kväll',
				body: 'Dagen bjuder på studiebesök hos Tetra Pak samt ett utskottssafari där vi träffar I-sektionens alla utskott, och på kvällen bjuder AktU på underhållning.',
                dresscode: 'Nolletröjor och ouverall'
			},
			'2015-08-28': {
				title: 'Phaddermiddag',
				body: 'Phaddermiddag. Phaddrarna bjuder på middag och det planeras inför den episka Nollesöndagen.'
			},
			'2015-08-29': {
				title: 'Räkfrossa, utEDischo',
				body: 'Efter en sittning fylld med räkor bär det av mot utEDischot där vi får träffa de andra sektionerna. Här kan man passa på att byta ouveralldelar med de andra sektionsmedlemmarna. Tänk på att INTE ta med egen sax. Undvik gärna att ta med egen väska, om du måste ha väska kommer där finnas skåp vid utEDischot. Ett tips är att ha färdigklippta remsor från ouvven med sig, fråga gärna en phadder om hur du bör klippa.',
				dresscode: 'Ouverall'
			},
			'2015-08-30': {
				title: 'Nollesöndagen',
				body: 'Efter en ordentlig frukost i MaskinerI:et är det dags att visa att just ni är nollegruppen att räkna med i år! Tillsammans med utskotten på I blir det en dag full med tävlingar, bus och en jäkla massa skoj! Det är en lång dag så det kan vara skönt att ha en vattenflaska med sig.',
				dresscode: 'Phadderoutfits & Ouverall'
			},

			'Vecka 1': {},
			'2015-08-31': {
				title: 'Lunchföreläsning, Uppdragskickoff, Middag',
				body: 'Lunchföreläsning med Sveriges Ingejörer(lämna matlådan hemma). Ni får lära känna er uppdragsgrupp, kvällen fortsätter med grillning och idéspånande. Kanske till och med ett fan kommer på besök.'
			},
			'2015-09-01': {
				title: 'Kårkamp, M <3 I-sittning',
				body: 'På lunchen är det kårkamp. Lekar och finsittningar blir det på kvällen tillsammans med vår kära systersektion I. Efter lekarna finns det tid för ombyte. Damerna har sittning i MaskinerI:et och herrarna i A-husets utställningshall. Efteråt är det gemensamt eftersläpp i A-huset',
                dresscode: 'Kostym/Cocktailklänning'
			},
			'2015-09-02': {
				title: 'Studiekväll, Uppdragskväll',
				body: 'Kvällen spenderas i MaskinerI:et med ouverallpimpning, uppdragsförberedelser och ett utmärkt läge att börja med matteplugget. Äldre I-studenter kommer finnas på plats som övnlingsledare.'
			},
			'2015-09-03': {
				title: 'Lunchföreläsning, Draggning, INGvasion',
				body: 'Lunchföreläsning med Semcon(Lämna matlådan hemma). Dags för draggning vid sjön Sj&oslash;n och på kvällen är det fest i Gasquesalen tillsammans med ING-sektionen.'
			},
			'2015-09-04': {
				title: '&Oslash;lresa',
				body: 'Vi beger oss utomlands mot Köpenhamn och Carlsbergs bryggeri och hela dagen fylls med sång, dans och rött.',
                dresscode: 'Ouverall'
			},
			'2015-09-05': {
				title: 'flyING',
				body: 'LTH tar sig mot Helsingborg och flyING-gruppernas flygfarkost ska flyga mot Helsing&oslash;r och I:s självklara seger. På helsingborgsklubben Tivoli avslutas kvällen på ett fantastiskt sätt.',
				dresscode: 'Ouverall'
			},
			'2015-09-06': {
				title: 'Nollan Sover',
				body: 'Även I:are är människor så det är dags för en ledig dag där man kan tvätta, laga matlådor eller kanske spontanträffa sina kompisar om man får för mycket abstinens av dem. Ps. Det är kul att tvätta i Ouverall!',
				dresscode: 'Ouverall'
			},

			'Vecka 2': {},
			'2015-09-07': {
                title: 'Casekväll & pub med D',
                body: 'Hjärnan aktiveras genom spännade case med D-sektionen, eftersom de är så trevliga så får ni lära känna dem extra mycket på kvällen med en pub i iDEét(E-huset).'
			},
			'2015-09-08': {
				title: 'Kårkamp, VM i överlevnad',
				body: 'På lunchen är det än en gång dags för kårkamp. På kvällen är det överlevnadssittning i Gasquesalen tillsammans med V-sektionen.'
			},
			'2015-09-09': {
				title: 'Lunchföreläsning, Partybrännboll',
				body: 'Lunchföreläsning med BorgWarner(lämna matlådan hemma). Tillsammans med din phaddergrupp tävlar du om vem som blir brännbollsmästare 2015. Efter partybrännbollen är det eftersläpp på Helsingkronas nation med heMliga gäster.',
				dresscode: 'Ouverall & Phadderoutfits'
			},
			'2015-09-10': {
				title: 'Kårestival, Studiekväll',
				body: 'Studieförmiddag. Använd din håltimme smart och kom till klassrummen i M-huset. Det bjuds på lyxfika och kunskap från övningsledare från äldre klasser. På kårestivalen säljs det även märken från andra sektioner och utskott från hela Lund är på plats och skryter. '
			},
			'2015-09-11': {
				title: 'Phaddermellis, Cheer, Hinderbana',
				body: 'En mellis i solen med din phaddergrupp, sen är det dags för massivt stöd för I:s &Oslash;verph&oslash;s i årets hinderbana och för våra fantastiska cheerleaders. Tänk på att få ordentlig sömn inför en PANGhelg.'
			},
			'2015-09-12': {
				title: 'Nollelördag, Gasque',
				body: 'Med den underbara M-cykeln i spetsen tågar vi mot Lundagård(vid domkyrkan) och gör den rödare än någonsin. Här tävlar vi i lådbilsrally, ballongistapultskjutning och luphtbandsshow. Efter tid för ombyte är det äntligen dags att bli en etta. I Gasquesalen firar vi med nollningens bästa sittning!',
				dresscode: 'Ouverall i Lundagård. Kostym/Cocktailklänning under gasquen'
			},
			'2015-09-13': {
				title: 'Regatta',
				body: 'Sektionerna visar upp sina mästerverk vid sjön Sj&oslash;n och tävlar  i det stora regattaslaget. På kvällen blir det regattabal.',
				dresscode: 'Ouverall'
			}
		};

		var daysHTML = '';

		var dayName = {
			0: 'Söndag',
			1: 'Måndag',
			2: 'Tisdag',
			3: 'Onsdag',
			4: 'Torsdag',
			5: 'Fredag',
			6: 'Lördag'
		};

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

				daysHTML += '<div class="top">';



				daysHTML += '<span class="day">'+dayName[inputDate.getDay()] +' '+ inputDate.getDate() + '/' + (inputDate.getMonth() + 1) +'</span>';

				if (dday.dresscode) {
					daysHTML += '<span class="dresscode">Klädsel: '+dday.dresscode+'</span>';
				}

				daysHTML += '</div>';

				daysHTML += '<span class="title">'+dday.title+'</span>';
				daysHTML += '<p class="body">'+dday.body+'</p>';



				daysHTML += '</li>';
			}

		}

		$('.days').html(daysHTML);

		setTimeout(function(){
			if ($('.today').length !== 0) {
				$('html, body').animate({
					scrollTop: $('.today').position().top - 30
				}, 500);
			}


			$('.hello').fadeOut(750);
		}, 1500);

		$('.toTop').on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		})

	});
