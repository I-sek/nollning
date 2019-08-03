// FIXME Add geo positions to days
const weekData = [
  {
    title: "Vecka 0",
    days: [
      {
        header: "Upprop, Rundvandring och Phaddermys",
        shortInfo: "",
        body: "Upprop i Kårhusets Aula och lunch med programmet, därefter rundvandring med phaddrarna. <br><br>“Nollan är varmt välkommen till I <br>Vi är glada att du en av oss vill bli <br>Du får direkt ett helt nytt gäng <br>Första kvällen blir såklart ett mysigt phadderhäng”",
        date: "2019-08-26",
        geo: "55.7109989,13.2072995"
      },
      {
        header: "Ouvvepåtagning och Lundagård",
        shortInfo: "",
        body: "Officiell invigning av den präktiga ouvven. Därefter anordnas lekar i Lundagård som utförs i phaddergrupperna. <br><br>“Sittning betyder middag med fest <br>“Dags att på riktigt sätta ouvven till test,<br>Klädkoden som ju passar nollan allra bäst<br>Sen vi med stolthet söderut går, det vankas ju lekar i Lundagård”",
        date: "2019-08-27",
        geo: "55.7109491,13.2064024"
      },
      {
        header: "Sångboksinsjungning och Hur-man-går-på-sittning-Sittning",
        shortInfo: "Klädsel till kvällen: Bruten kavaj",
        body: "Mellan 12.00 och 13.00 är det sångboksinsjugning i A-gropen, sångförmännen tar ton och det bjuds på mat från Styrelsen. På kvällen är det dags för Er första sittning. <br><br> <br>“Sittning betyder middag med fest  <br>Du som ny är vår hedersgäst <br>Ett första nationsbesök söderöver  <br>Vi ska lära dig allt du behöver”",
        date: "2019-08-28",
        geo: "55.7109491,13.2064024"
      },
      {
        header: "Besök hos KFS och Phaddermys",
        shortInfo: "",
        body: "",
        date: "2019-08-29",
        geo: "55.7109491,13.2064024"
      },
      {
        header: "Himmelriket",
        shortInfo: "Klädsel: Ouvve och Phaddergruppstema",
        body: "“En resa hör till ett äventyr <br>det är okänt vart du kosan styr <br>de enda som vet är Styrelsen <br>det dröjer till lördag innan du kommer hem”",
        date: "2019-08-30",
        geo: "55.7109491,13.2064024"
      },
      {
        header: "StADsvandrIngEn och UtEDischot",
        shortInfo: "Klädsel: Ouvve och Phaddergruppstema",
        body: "Hemkomst till Lund under dagen direkt följt av start på den legendariska poängjakten genom hela Lund. Kvällen avslutas med utomhusfest som Elektro- och Datasektionen anordnar. <br><br>“Det är dags att visa att din phaddergrupp är den bästa <br>Samla poäng är uppdraget nästa <br>På kvällen väntar fest med hela TLTH <br>Fler färger än vinröd på ouvven kan man få”",
        date: "2019-08-31",
        geo: "55.7109491,13.2064024"
      },
      {
        header: "Nollesöndag",
        shortInfo: "Klädsel: Ouvve och Phaddergruppstema",
        body: "Efter en lördag från ovan blir det frukost med phaddergrupperna och en söndag med aktiviteter tillsammans med Maskinsektionen. <br><br>“Phaddrarna står för din frukostkonsumtion, <br>Nollesöndagen är en långtgående tradition. <br>Soffor från hela M-huset dras ut, <br>Efter detta är första nollningsveckan slut”",
        date: "2019-09-01",
        geo: "55.7109491,13.2064024"
      }
    ]
  },
  {
    title: "Vecka 1",
    days: [
      {
        header: "Uppdragskväll",
        shortInfo: "",
        body: "Under kvällen finns det möjlighet för phaddergrupperna att förbereda sig inför respektive uppdrag.",
        date: "2019-09-02",
        geo: "55.7109491,13.2064024"
      },{
        header: "Lunchföreläsning och I<3M",
        shortInfo: "Klädsel till kvällen: Bruten kavaj",
        body: "Tisdag och därmed Ouvve! det gäller att visa vilken sektion du tillhör och du får chans att bära vinrött med stolthet. På kvällen har vi en traditionsenlig sittning med våra kära systersektion, maskinsektionen. <br><br>“Vi har grannar i huset som läser M <br>här har du chansen att lära känna dem <br>Deras färg den är röd och fin som få  <br>Tillsammans tar vi över LTH”",
        date: "2019-09-03",
        geo: "55.7109491,13.2064024"
      },{
        header: "Draggning och Partybrännboll",
        shortInfo: "Klädsel: Sjönsjönskor och sjönsjönkläder (oömma)",
        body: "Eftermiddagen börjar med draggning i sjøn Sjøn och efteråt möts phaddergrupperna i den traditionella sporten Partybrännboll. <br><br> <br>“Partybrännboll är en sport med historia så lång  <br>Nu får du lära dig hur det går till en gång <br>Bad i sjø och häng rätt fett <br>Att hinna med mer på en dag är inte lätt”",
        date: "2019-09-04",
        geo: "55.7109491,13.2064024"
      },{
        header: "Studiekväll",
        shortInfo: "",
        body: "Ikväll erbjuds nollan möjilghet att plugga tillsammans med klasskamrater ackompanjerat av serverad middag och studiehjälp",
        date: "2019-09-05",
        geo: "55.7109491,13.2064024"
      },{
        header: "Lunchföreläsning och Phaddermys",
        shortInfo: "",
        body: "",
        date: "2019-09-06",
        geo: "55.7109491,13.2064024"
      },{
        header: "Dansk frukost och FlyING",
        shortInfo: "Klädsel: Uppdragskläder",
        body: "Denna himmelska lördag börjar med en dansk frukost för att se till att nollan är ordentligt laddad inför en lång dag i Helsingborg. <br><br>“I Helsingborg det ingenjörer också är <br>Vi tar oss med buss och hälsar på där <br>Farkost har varje sektion byggt varsin <br>Ta dig längst över sundet och vinn!”",
        date: "2019-09-07",
        geo: "55.7109491,13.2064024"
      },{
        header: "Nollan vilar",
        shortInfo: "",
        body: "",
        date: "2019-09-08",
        geo: "55.7109491,13.2064024"
      }
    ]
  },
  {
    title: "Vecka 2",
    days: [
      {
        header: "Studiekväll och Uppdragskväll",
        shortInfo: "",
        body: "Här anordnas en studiekväll samtidigt som kvällen även rekommenderas att användas till att fila på uppdragen!",
        date: "2019-09-09",
        geo: "55.7109491,13.2064024"
      },{
        header: "Kårkamp, Märkespicknick och Middagslotteri",
        shortInfo: "",
        body: "Nollan får chansen att fylla ouvven med massa spännande märken från främmande sektioner. Under kvällen blir det ett middagslotteri för nollor och phaddrar. <br><br>”Andra sektioner har märken så fina <br>För en liten peng blir de dina <br>Middag ska du sen förtära  <br>Med phaddrar och nollor så kära”",
        date: "2019-09-10",
        geo: "55.7109491,13.2064024"
      },{
        header: "Toga",
        shortInfo: "Klädsel: Toga",
        body: "Denna dag är det dags för en tradition som härstammar från de gamla grekerna. <br><br> <br>“Dags för dig att en toga vika <br>Vet du inte hur brukar Google inte svika <br>Skriv how to fold a toga i sökfältet <br>Så leker vi grekiska gudar i partytältet”",
        date: "2019-09-11",
        geo: "55.7109491,13.2064024"
      },{
        header: "Uppdragskväll",
        shortInfo: "",
        body: "",
        date: "2019-09-12",
        geo: "55.7109491,13.2064024"
      },{
        header: "Nollefredag",
        shortInfo: "Klädsel: Uppdragskläder",
        body: "16:30 samlas vi för en gemensam marsch till S:t Hans backar där vi kommer få njuta av Øverphøshinderbanan och Cheer. <br><br><br>”Vid S:t Hans backar finns en stor gräsplätt<br>Att vara många där är ganska lätt<br>Tur är det för där ska hela LTH<br>Cheer och Øverphøshinderbanan heja på”",
        date: "2019-09-13",
        geo: "55.7109491,13.2064024"
      },{
        header: "Nollelördag",
        shortInfo: "Klädsel: Ouvve",
        body: "Champagnefrukost klockan 07:30 följt av gemensamt tågande ner till Lundagård, här är det dags för uppdragen att visa upp sig och alla talanger bland I-sektionens medlemmar. Kvällen avslutas med en sittning i Maskineriet. <br><br>”Arla morgonstund, det är dags att gå<br>Med bubbel i strupen kan du pinna på<br>Ner till Lundagård vår resa leder<br>Hoppas det blir fint veder”",
        date: "2019-09-14",
        geo: "55.7109491,13.2064024"
      },{
        header: "Regattan",
        shortInfo: "Klädsel: Uppdragskläder",
        body: "“Hejsan hoppsan och skepp ohoj, <br>att se slaget på vattnet är mycket skoj. <br>Här avgörs vilken sektion som har bäst båt, <br>tagga upp era kämpar med en taggig låt!”",
        date: "2019-09-15",
        geo: "55.7109491,13.2064024"
      }
    ]
  },
  {
    title: "Vecka 3",
    days: [
      {
        header: "Lunchföreläsning och Caeleste Certamen",
        shortInfo: "Klädsel: Ouvve och Phaddergruppstema",
        body: "12.00 bjuder Skanska in till lunchföreläsning. På kvällen är det tävlingsdags. <br><br> <br>“Dags för en tävling, i idrott den här gången <br>Ladda upp med bästa phaddergruppsången <br>Ta med vattenflaskan och pannbandet <br>Tid att kora bästa phaddergruppen i landet”",
        date: "2019-09-16",
        geo: "55.7109491,13.2064024"
      },{
        header: "Kårkamp, WaDerloo och Inget Vanligt Rave",
        shortInfo: "Klädsel: Ouvve, Tåliga kläder",
        body: "En tisdag är ingen tisdag utan ouvve. Denna dag utspelas en mäktig strid i vattenballongens tecken mellan sektionerna, som följs av en färgglad fest med V-sektionen. <br><br> <br>”Nu ska vi mot sektionerna kriga <br>Visa dem att vi spelar i en högre liga <br>Efter du bli’tt blöt i stridens hetta <br>Är det dags att tonen på ravet sätta”",
        date: "2019-09-17",
        geo: "55.7109491,13.2064024"
      },{
        header: "Studiekväll",
        shortInfo: "",
        body: "Ikväll är det återigen dags för nollorna att plugga tillsammans, slippa tänka på middag och få hjälp med allt som varit klurigt i Indeken och Endimen",
        date: "2019-09-18",
        geo: "55.7109491,13.2064024"
      },{
        header: "Phaddermys",
        shortInfo: "",
        body: "Denna kväll är det dags för ditt sista officiella phaddermys.",
        date: "2019-09-19",
        geo: "55.7109491,13.2064024"
      },{
        header: "Nollegasque",
        shortInfo: "Klädsel: Mörk kostym",
        body: "Ikväll kl. 17:00 är det dags för nollningens finalfest - Nollegasquen!  <br><br> <br>“Det här blir nollningens stora fest  <br>Självklart kommer den att bli allra bäst,  <br>en trerättersmiddag ska göra oss mätta,  <br>sen ska du få gå från nolla till etta,  <br>Glada, snälla, helt underbara,  <br>Det tror vi varje etta kommer att vara”",
        date: "2019-09-20",
        geo: "55.7109491,13.2064024"
      },{
        header: "Gasquelunch",
        shortInfo: "",
        body: "Efter en lång kväll i festligheters tecken, fortsätter firandet vidare att nollan blivit etta. Ettan blir inbjuden till Gasquelunch!",
        date: "2019-09-21",
        geo: "55.7109491,13.2064024"
      }
    ]
  },
  {
    title: "Vecka 4",
    days: [
      {
        header: "Skidphesten",
        shortInfo: "Klädsel: After Ski",
        body: "Det är dags för den sista festen på I’s nollning, men förtvivla inte; det kommer fler fester. <br><br>“Understället på trots att det är september <br>Bränna, fartdräkt, det är ikväll det händer <br>Nollningen är ännu inte riktigt förbi <br>När Lophtet förvandlas till after-ski”",
        date: "2019-09-28",
        geo: "55.7109491,13.2064024"
      }
    ]
  },
  {
    title: "Vecka 5",
    days: [
      {
        header: "Sensation RED",
        shortInfo: "Klädsel: Rött",
        body: "En väldigt röd fest som anordnas av M-sektionen.",
        date: "2019-10-02",
        geo: "55.7109491,13.2064024"
      },{
        header: "Solklart!",
        shortInfo: "",
        body: "På den absolut sista festen för Nollningen öppnar TLTH upp hela Kårhuset till en enda stor klubb.",
        date: "2019-10-05",
        geo: "55.7109491,13.2064024"
      }
    ]
  }
];
