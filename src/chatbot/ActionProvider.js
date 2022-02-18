class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this._state = {
      genre: "",
      author: "",
      bookStorage: []
    };
    this.books = [
      {
        id: 100,
        title: "Ostfriesensturm",
        author: "Klaus-Peter Wolf",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Der 16. Fall für Ostfrieslands Top-Ermittlerin Ann Kathrin Klaasen von Nummer-1-Bestsellerautor Klaus-Peter Wolf. Der Anruf erreicht Ann Kathrin Klaasen und Frank Weller beim Spaziergang am menschenleeren Strand. In einer Ferienwohnung auf Wangerooge wurde die Leiche eines Mannes gefunden. Die Tötungsart lässt vermuten, dass hierfür das organisierte Verbrechen verantwortlich ist - ein Verdacht, der Ann Kathrin und ihr Team sofort in höchste Alarmbereitschaft versetzt. In einem Tierpark geschieht kurz darauf ein weiterer Mord. Unter Hochdruck durchsucht die Polizei leer stehende Ferienwohnungen, nachdem alle Touristen Ostfriesland verlassen mussten. Wo versteckt sich der Killer? Für Ann Kathrin Klaasen und ihr Team beginnt eine Ermittlung unter noch nie dagewesenen Bedingungen.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/ca4bb8d65c8c175dc5368d81c46563e458ac24df-00-00.jpeg",
        rating: 4.2,
        price: 13.0
      },
      {
        id: 101,
        title: "Thirteen",
        author: "Steve Cavanagh",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Es ist Amerikas spektakulärster Mordfall. Doch der Killer steht nicht vor Gericht. Er sitzt in der Jury. Der New Yorker Strafverteidiger Eddie Flynn soll Amerikas prominentesten Mordverdächtigen vor Gericht vertreten: Robert »Bobby« Solomon – jung, attraktiv und der Liebling von ganz Hollywood. Eddies Klienten zählen normalerweise nicht zu den Reichen und Schönen. Aber wenn er von der Unschuld eines Angeklagten überzeugt ist, tut Eddie alles, um ihn freizubekommen. Und er glaubt Bobby, dass dieser nichts mit dem Mord an seiner Frau und deren Liebhaber zu tun zu hat, obwohl alle Beweise gegen ihn sprechen. Der Fall scheint aussichtslos, bis Eddie erkennt: Der wahre Killer sitzt in der Jury ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/ec54a61090ec34e7f606976d18153d14edddefdc-00-00.jpeg",
        rating: 4.8,
        price: 13.0
      },
      {
        id: 102,
        title: "Die Stimme des Wahns",
        author: "Ethan Cross",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Lasst, die ihr eintretet, alle Hoffnung fahren. Ein Hochsicherheitsgefängnis in den Rocky Mountains. Dort sitzt einer der gefährlichsten Verbrecher der Welt ein, der sogenannte Demon. Ackerman selbst brachte den Mann vor Jahren hinter Gitter. Aber ist der Häftling wirklich der, der er vorgibt zu sein? Zusammen mit seiner Partnerin Nadia Shirazi findet Ackerman heraus, dass der Mann, der die Haftstrafe verbüßt, in Wahrheit ein geschickt manipulierter Doppelgänger ist. Die Schlussfolgerung lässt selbst Ackerman das Blut in den Adern gefrieren: Denn der echte Demon war die ganze Zeit auf freiem Fuß, und er hatte all die Jahre Zeit, seine Rache vorzubereiten. Als Demon schließlich zuschlägt, trifft er Ackerman an seiner verwundbarsten Stelle ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/13b36fb282b49116ec07976d9d4ee9f032998c80-00-00.jpeg",
        rating: 4.4,
        price: 12.9
      },
      {
        id: 103,
        title: "Playlist",
        author: "Sebastian Fitzek",
        genre: "Krimi",
        publishedDate: 2021,
        description:
          "Musik ist ihr Leben. 15 Songs entscheiden, wie lange es noch dauert. Vor einem Monat verschwand die 15-jährige Feline Jagow spurlos auf dem Weg zur Schule. Von ihrer Mutter beauftragt, stößt Privatermittler Alexander Zorbach auf einen Musikdienst im Internet, über den Feline immer ihre Lieblingssongs hörte. Das Erstaunliche: Vor wenigen Tagen wurde die Playlist verändert. Sendet Feline mit der Auswahl der Songs einen versteckten Hinweis, wohin sie verschleppt wurde und wie sie gerettet werden kann? Fieberhaft versucht Zorbach das Rätsel der Playlist zu entschlüsseln. Ahnungslos, dass ihn die Suche nach Feline und die Lösung des Rätsels der Playlist in einen grauenhaften Albtraum stürzen wird. Ein gnadenloser Wettlauf gegen die Zeit, bei dem die Überlebenschancen aller Beteiligten gegen Null gehen ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/054c166f298851a4fe1754a56cb756cfbc16fef8-00-00.jpeg",
        rating: 4.4,
        price: 22.99
      },
      {
        id: 104,
        title: "Der Heimweg",
        author: "Sebastian Fitzek",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Es ist Samstag, kurz nach 22.00 Uhr. Jules Tannberg sitzt am Begleit-Telefon. Ein ehrenamtlicher Telefon-Service für Frauen, die zu später Stunde auf ihrem Heimweg Angst bekommen und sich einen telefonischen Begleiter wünschen, dessen beruhigende Stimme sie sicher durch die Berliner Nacht nach Hause führt - oder im Notfall Hilfe ruft. Noch nie gab es eine wirklich lebensgefährliche Situation. Bis heute, als Jules mit Klara spricht. Die junge Frau hat entsetzliche Angst. Sie glaubt, von einem Mann verfolgt zu werden, der sie schon einmal überfallen hat und der mit Blut ein Datum auf ihre Schlafzimmerwand malte: Klaras Todestag! Und dieser Tag bricht in nicht einmal zwei Stunden an ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/2ba732cc0edd8c6a1271dac982c91031a7f3a42d-00-00.jpeg",
        rating: 4.1,
        price: 11.99
      },
      {
        id: 105,
        title: "Fuchsmädchen",
        author: "Maria Grund",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Eisige Kälte herrscht an jenem Sonntag auf der Insel vor der Küste Schwedens, als man die Leiche eines jungen Mädchens in einem verlassenen Kalksteinbruch entdeckt. Das Verstörende an dem Fall: Die Tote hat eine unheimliche Fuchsmaske bei sich.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/3a077954f91a86b7bf3bde0abecec36812a79e28-00-00.jpeg",
        rating: 4.5,
        price: 15.0
      },
      {
        id: 106,
        title: "In ewiger Freundschaft",
        author: "Nele Neuhaus",
        genre: "Krimi",
        publishedDate: 2021,
        description:
          "Eine Frau wird vermisst. Im Obergeschoss ihres Hauses in Bad Soden findet die Polizei den dementen Vater, verwirrt und dehydriert. Und in der Küche Spuren eines Blutbads. Die Ermittlungen führen Pia Sander und Oliver von Bodenstein zum renommierten Frankfurter Literaturverlag Winterscheid, wo die Vermisste Programmleiterin war. Ihr wurde nach über dreißig Jahren gekündigt, woraufhin sie einen ihrer Autoren wegen Plagiats ans Messer lieferte – ein Skandal und vielleicht ein Mordmotiv? Als die Leiche der Frau gefunden wird und ein weiterer Mord geschieht, stoßen Pia und Bodenstein auf ein gut gehütetes Geheimnis. Beide Opfer kannten es. Das war ihr Todesurteil. Wer muss als nächstes sterben?  Pia und Bodenstein jagen einen Täter, der ihnen immer einen Schritt voraus zu sein scheint ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/1627810137cba7421277aa16aa6fbb6e20b654b7_BF2000-2000.jpeg",
        rating: 4.4,
        price: 24.99
      },
      {
        id: 107,
        title: "Natrium Chlorid",
        author: "Jussi Adler-Olsen",
        genre: "Krimi",
        publishedDate: 2021,
        description:
          "Er mordet seit 30 Jahren. Niemand konnte ihn stoppen. Bis jetzt. Der neue Fall für das Sonderdezernat Q. An ihrem 60. Geburtstag begeht eine Frau Selbstmord. Ihr Tod führt zur Wiederaufnahme eines ungeklärten Falls aus dem Jahr 1988, der Marcus Jacobsen mit seinem besten Ermittler Carl Mørck zusammengeführt hat. Carl, Assad, Rose und Gordon ahnen nicht, dass der Fall das Sonderdezernat Q an die Grenzen bringt: Seit drei Jahrzehnten fallen Menschen einem gerissenen Killer zum Opfer, der tötet, ohne dass ihm ein Mord nachgewiesen werden kann. Er wählt Opfer und Todeszeitpunkt mit Bedacht und Präzision. Dreißig Jahre lang konnte niemand ihn stoppen. Und während die Corona-Maßnahmen die Ermittlungsarbeiten zusätzlich erschweren, bewegt der alte Fall sich auf Carl zu wie eine Giftschlange, die Witterung mit ihrer Beute aufgenommen hat …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/8ff15f0be351ac50fe962dc118a9749b42ddf65f-00-00.jpeg",
        rating: 4.2,
        price: 25.0
      },
      {
        id: 108,
        title: "Achtsam Morden",
        author: "Karsten Dusse",
        genre: "Krimi",
        publishedDate: 2019,
        description:
          "Björn Diemel wird von seiner Frau gezwungen, ein Achtsamkeits-Seminar zu besuchen, um seine Ehe ins Reine zu bringen, sich als guter Vater zu beweisen und die etwas aus den Fugen geratene Work-Life-Balance wieder herzustellen. Denn Björn ist ein erfolgreicher Anwalt und hat dementsprechend sehr wenig Zeit für seine Familie. Der Kurs trägt tatsächlich Früchte und Björn kann das Gelernte sogar in seinen Job integrieren, allerdings nicht ganz auf die erwartete Weise. Denn als sein Mandant, ein brutaler und mehr als schuldiger Großkrimineller, beginnt, ihm ernstliche Probleme zu bereiten, bringt er ihn einfach um — und zwar nach allen Regeln der Achtsamkeit. Achtsam morden ist die Geschichte eines bewussten und entschleunigten Mordes, der längst überfällige Schulterschluss zwischen Achtsamkeitsratgeber und Krimi, vor allem aber ein origineller Unterhaltungsroman.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/992854e43164875e3c12370c92fd4a88ee9e0020-00-00.jpeg",
        rating: 4.4,
        price: 10.99
      },
      {
        id: 109,
        title: "Corpus Delicti Ein Prozess",
        author: "Juli Zeh",
        genre: "Krimi",
        publishedDate: 2010,
        description:
          "Jung, attraktiv, begabt und unabhängig: Das ist Mia Holl, eine Frau von dreißig Jahren, die sich vor einem Schwurgericht verantworten muss. Zur Last gelegt wird ihr ein Zuviel an Liebe (zu ihrem Bruder), ein Zuviel an Verstand (sie denkt naturwissenschaftlich) und ein Übermaß an geistiger Unabhängigkeit. In einer Gesellschaft, in der die Sorge um den Körper alle geistigen Werte verdrängt hat, reicht dies aus, um als gefährliches Subjekt eingestuft zu werden. Juli Zeh entwirft in Corpus Delicti das spannende Science-Fiction-Szenario einer Gesundheitsdiktatur irgendwann im 21. Jahrhundert, in der Gesundheit zur höchsten Bürgerpflicht geworden ist.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/9a76292bdedf3ce0da3fc59aecf9a82e05d6b6f0-00-00.jpeg",
        rating: 3.8,
        price: 11.0
      },
      {
        id: 110,
        title: "Never - Die letze Entscheidung",
        author: "Ken Follett",
        genre: "Krimi",
        publishedDate: 2021,
        description:
          "In der Sahara folgen westliche Geheimdienstagenten der Spur mächtiger Drogenschmuggler. Die Amerikanerin Tamara und ihr französischer Kollege Tab gehören zu ihnen. Für ihre Liebe riskieren sie ihre Karriere - und im Einsatz für ihr Land ihr Leben. Nicht weit entfernt macht sich die junge Witwe Kiah mit Hilfe von Schleusern auf den Weg nach Europa. Als sie sich gegen Übergriffe verteidigen muss, hilft ihr ein Mitreisender. Doch er scheint nicht zu sein, was er vorgibt. In China kämpft der hohe Regierungsbeamte Chang Kai gegen die kommunistischen Hardliner. Er hat ehrgeizige Pläne, und er befürchtet, dass die Kriegstreiberei seiner Widersacher das Land und dessen Verbündeten Nordkorea auf einen Weg leitet, der keine Umkehr zulässt. In den USA führt Pauline Green, die erste Präsidentin des Landes, ihre Amtsgeschäfte souverän und bedacht. Sie wird alles tun, was in ihrer Macht steht, um zu verhindern, dass die USA in einen unnötigen Krieg eintreten müssen. Doch wenn ein aggressiver Akt zum nächsten führt, wenn alle diplomatischen Mittel ausgereizt sind, die letzte Entscheidung gefallen ist - wer kann dann noch das Unvermeidliche verhindern?",
        thumbnail:
          "https://assets.thalia.media/img/artikel/7dcd773fd31eb12c6068002681b653e4b030a022-00-00.jpeg",
        rating: 4.7,
        price: 32.0
      },
      {
        id: 111,
        title: "Verblendung / Millenium Bd. 1",
        author: "Stieg Larsson",
        genre: "Krimi",
        publishedDate: 2015,
        description:
          "Was geschah mit Harriet Vanger? Während eines Familientreffens spurlos verschwunden, bleibt ihr Schicksal jahrzehntelang ungeklärt. Bis der Journalist Mikael Blomkvist und die Ermittlerin Lisbeth Salander im Auftrag des Onkels recherchieren. Was sie in der vangerschen Familiengeschichte zutage fördern, lässt alle Beteiligten wünschen, sie hätten sich nie mit diesem Fall beschäftigt.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/4738e5bf1752e7668e55202b6e6012be5bdb521c-00-00.jpeg",
        rating: 4.5,
        price: 9.99
      },
      {
        id: 112,
        title: "Verdammnis / Millenium Bd. 2",
        author: "Stieg Larsson",
        genre: "Krimi",
        publishedDate: 2015,
        description:
          "Der Journalist Mikael Blomkvist recherchiert in einem besonders brisanten Fall von Mädchenhandel. Junge russische Frauen werden gewaltsam zur Prostitution gezwungen. Die Hintermänner bekleiden hohe Regierungsämter. Als Blomkvists Informant tot aufgefunden wird, fällt der Verdacht auf die Ermittlerin Lisbeth Salander. Nur Blomkvist glaubt an ihre Unschuld. Eine mörderische Hetzjagd beginnt.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/59fdcd79ecc66095d5c98a5c66000a7df1a6eb29-00-00.jpeg",
        rating: 4.4,
        price: 9.99
      },
      {
        id: 113,
        title: "Vergebung / Millenium Bd. 3",
        author: "Stieg Larsson",
        genre: "Krimi",
        publishedDate: 2015,
        description:
          "Die Ermittlerin Lisbeth Salander steht unter Mordverdacht. Ihr Partner, der Journalist Mikael Blomkvist, schwört, ihre Unschuld zu beweisen. Um jeden Preis. Blomkvist weiß, dass es diesmal um Salanders Leben geht. Gegen alle Widerstände bringt er die Wahrheit ans Licht. Als seine Ermittlungen die schwedische Regierung in ihren Grundfesten zu erschüttern drohen, setzt er alles auf eine Karte.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/18b9a02fd09b08827501ccfb011474f48d17e1be-00-00.jpeg",
        rating: 4.8,
        price: 9.99
      },
      {
        id: 114,
        title: "Rupert Undercover / Ostfriesische Mission",
        author: "Klaus-Peter Wolf",
        genre: "Krimi",
        publishedDate: 2020,
        description:
          "Schon immer wollte Rupert zum BKA. Doch die haben ihn nie genommen. Jetzt aber brauchen sie ihn, denn er sieht einem internationalen Drogenboss zum Verwechseln ähnlich. Für Rupert ist das die Chance seines Lebens: Endlich kann er beweisen, was in ihm steckt. Eine gefährliche Undercover-Mission beginnt. Ganz auf sich allein gestellt merkt er schnell, dass nichts so ist, wie es scheint und die Sache gefährlicher als gedacht. Kann er ohne seine ostfriesischen Kollegen überhaupt überleben? ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/68c5cf0c630ae05a549d8e6c5a2fbd93d690173e-00-00.jpeg",
        rating: 4.0,
        price: 12.0
      },
      {
        id: 115,
        title: "Rupert Undercover / Ostfriesische Jagd",
        author: "Klaus-Peter Wolf",
        genre: "Krimi",
        publishedDate: 2021,
        description:
          "Kriminaldirektorin Liane Brennecke hätte eigentlich Angst um ihr Leben haben müssen, aber dem war nicht so. Sie betrachtete sich im Spiegel. Sie war sich selbst fremd geworden. In diesem Folterkeller war etwas mit ihr geschehen. Etwas war aus dem Körpergefängnis geflohen und hatte sich in Sicherheit gebracht. Ein Seelenanteil von ihr war entkommen. Sie sorgte sich um ihre geistige Gesundheit. War sie kurz davor, verrückt zu werden, oder hatte sie diese Schwelle bereits in dem Rattenloch überschritten, in dem er sie gefangen gehalten hatte? Um wieder ganz zu werden, musste sie ihn erledigen. Dazu brauchte sie einen Köder und ein Werkzeug. Niemand erschien ihr geeigneter als dieser Rupert alias Frederico Müller-Gonzáles.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/99a1855de52c94b80033495552ea09191cec5814-00-00.jpeg",
        rating: 3.9,
        price: 12.0
      },
      {
        id: 116,
        title: "Ostseekreuz",
        author: "Eva Almstädt",
        genre: "Krimi",
        publishedDate: 2022,
        description:
          "Kommissarin Pia Korittki nimmt sich eine Auszeit in einem Ostsee-Kloster. Das ruhige, beschauliche Leben mit den Mönchen und einigen wenigen Gästen soll ihr helfen, sich von einem traumatischen Erlebnis zu erholen. Doch die Ruhe wird jäh durch das Läuten der Totenglocke gestört. Ein Novize hat einen der Mönche leblos in der Kirchenbank kniend gefunden. Schnell ist klar, dass Bruder Zacharias ermordet wurde. Pia will sich aus den Ermittlungen heraushalten, doch als auch noch ein Gast spurlos verschwindet, muss sie handeln - und macht in einem Kellerraum eine schreckliche Entdeckung ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/606cfcb609cf6c7a9bd0e95c4c4a0062b4b4c74b-00-00.jpeg",
        rating: 0,
        price: 11.99
      },
      {
        id: 117,
        title: "Ostseerache",
        author: "Eva Almstädt",
        genre: "Krimi",
        publishedDate: 2018,
        description:
          "In einem beschaulichen Dorf an der Ostsee wird eine junge Frau auf grausame Weise ermordet. Die Dorfbewohner verdächtigen Flora, die als Jugendliche eine Mitschuld am Tod eines Nachbarjungen gehabt haben soll und die nun wieder in ihr Elternhaus zurückgekehrt ist. Die Mordkommission Lübeck ermittelt. Auch Kommissarin Pia Korittki, die gerade ihre Hochzeit plant, sieht einen Zusammenhang zwischen beiden Ereignissen und rollt den früheren Todesfall wieder auf. Schon bald muss sie fürchten, dass es nicht bei diesen zwei Morden bleiben wird...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/ed24940b7f67ad4325d72c661b4ad454c7e06732-00-00.jpeg",
        rating: 4.6,
        price: 11.0
      },
      {
        id: 118,
        title: "Ostseeangst",
        author: "Eva Almstädt",
        genre: "Krimi",
        publishedDate: 2019,
        description:
          "Während eines Ausflugs finden Jugendliche eine menschliche Hand. Die Lübecker Mordkommission ermittelt. In der folgenden Nacht verschwindet die Gruppenleiterin aus der Jugendherberge spurlos. Bei der Suche wird in einem nahe gelegenen Stall ein abgetrennter Unterarm gefunden, doch er gehört nicht zu der verbrannten Hand. Zur gleichen Zeit gerät Kommissarin Pia Korittkis Leben nach dem Tod ihres Freundes immer mehr aus den Fugen. Als ein Konflikt mit Kollegen eskaliert, rät Pias Vorgesetzter ihr zu einer Auszeit. Aber dann bergen Taucher in einem See weitere Leichenteile ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/7ef76daef2a521ff6f79f64e6db34fe92a847252-00-00.jpeg",
        rating: 4.5,
        price: 11.0
      },
      {
        id: 119,
        title: "Eine kleine Stadt in Deutschland",
        author: "John Le Carré",
        genre: "Krimi",
        publishedDate: 2005,
        description:
          "Bonn in den 60er Jahren: Ein kleiner Beamter der britischen Botschaft verschwindet - und mit ihm ein äußerst brisantes Geheimdossier. Auf ihn angesetzt wird Alan Turner, ein Beamter der Londoner Spionageabwehr. Doch dieser erkennt bald, daß auch er nur ein Spielball der politischen Mächte ist.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/644b7587c728d7782439fb74d54c6f2b6e244a35-00-00.jpeg",
        rating: 0.0,
        price: 9.95
      },
      {
        id: 120,
        title: "Der Schneider von Panama",
        author: "John Le Carré",
        genre: "Krimi",
        publishedDate: 2008,
        description:
          "In Panama bahnt sich eine Verschwörung an, um den Panama-Vertrag zunichte zu machen. Dieser sieht vor, die Kontrolle über den Kanal 1999 den Panamaern zu überlassen. Der gutmütige Herrenschneider Harry Pendel wird von dem britischen Spion Andy Osnard gezwungen, für den Geheimdienst zu arbeiten. Er soll das amerikanische Militär ködern, die schmutzige Arbeit zu tun – nämlich Panama erneut zu besetzen und den Vertrag für null und nichtig zu erklären. Pendel verfolgt jedoch ein ganz anderes Ziel.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/995c90ef5279deb223f8eed15c889b4d1ca5c08c-00-00.jpeg",
        rating: 0.0,
        price: 10.99
      },
      {
        id: 200,
        title: "Snow Crash",
        author: "Neal Stephenson",
        genre: "Science Fiction",
        publishedDate: 2021,
        description:
          "Visionär und rasend schnell erzählt: Das zentrale Werk des Cyberpunks jetzt in neuer Übersetzung. Hiro Protagonist war mal Programmierer, aber seit auch hier die Konzerne alles gleichgeschaltet haben, zieht er jeden Bullshit-Job vor: Pizza-Auslieferer für die Mafia. Oder Information Broker für die ehemalige CIA. Wichtiger als die echte Welt ist für ihn ohnehin das Metaverse, ein virtueller Ort, an dem sich die Menschen mit ihren selbst gestalteten Avataren treffen. Dort begegnet er auch zum ersten Mal der Droge »Snow Crash«. Das Besondere: Snow Crash ist ein Computervirus, der auch Menschen befallen kann. Zusammen mit seiner Partnerin Y. T. ermittelt Hiro – und kommt einer Verschwörung auf die Spur, die bis in die menschliche Vorgeschichte zurückreicht.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/2f2b4ed06b9b4249c5406fb25d0109f3e6c8f9b3-00-00.jpeg",
        rating: 5.0,
        price: 16.99
      },
      {
        id: 201,
        title: "The One - Finde dein perfektes Match",
        author: "John Marrs",
        genre: "Science Fiction",
        publishedDate: 2019,
        description:
          "In der nahen Zukunft ist der Traum von der großen Liebe Wirklichkeit geworden. Dank der revolutionären Entschlüsselung eines bis dahin verborgenen genetischen Codes können die Menschen durch einen simplen Gentest ihren perfekten Partner finden. Das beschert der Welt Millionen glücklicher Paare und dem Online-Portal MatchyourDNA Milliarden auf dem Konto. Moment mal, Millionen glücklicher Paare? Nicht so ganz, denn auch Seelenverwandte haben Geheimnisse voreinander – und manche davon sind tödlicher als andere …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/ed30c62374adc8c685afa1a717d9e852de0b355f-00-00.jpeg",
        rating: 4.7,
        price: 15.99
      },
      {
        id: 202,
        title: "Vicious - Das Böse in uns",
        author: "V. E. Schwab",
        genre: "Science Fiction",
        publishedDate: 2019,
        description:
          "Victor Vale und Eli Ever wollen sterben. Allerdings nicht, um tot zu bleiben, sondern um mit außergewöhnlichen Fähigkeiten wieder aufzuerstehen. Als junge, brillante Medizinstudenten wissen sie genau, was sie tun. Sie planen das Experiment minutiös ? und haben Erfolg: Beide kommen verwandelt wieder ins Leben zurück. Eli entwickelt eine erstaunliche Regenerationskraft und wird praktisch unsterblich, Victor kann anderen Schmerz zufügen oder nehmen. Was sie nicht unter Kontrolle haben, ist die Tragödie, die durch ihr Experiment ausgelöst wird. Denn Superkräfte allein machen keine Helden … ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/db927ba32f0d0f2db6c23c5c4618a889f0ebf6ae-00-00.jpeg",
        rating: 4.4,
        price: 16.99
      },
      {
        id: 203,
        title: "The Passengers",
        author: "John Marrs",
        genre: "Science Fiction",
        publishedDate: 2020,
        description:
          "»Guten Morgen, Claire. Sie dürften bemerkt haben, dass sich Ihr Fahrzeug nicht mehr unter Ihrer Kontrolle befindet. Ab sofort bestimme ich, wohin Ihre Fahrt geht. Im Augenblick gibt es nur eines, das Sie wissen sollten: In zwei Stunden und dreißig Minuten sind Sie höchstwahrscheinlich tot.« Als die hochschwangere Claire Arden diese Worte aus dem Lautsprecher ihres nagelneuen selbstfahrenden Autos vernimmt, hält sie es zunächst für einen schlechten Scherz. Schnell stellt sich jedoch heraus, dass sie tatsächlich in ihrem Wagen gefangen ist. Und sie ist nicht die Einzige – noch sieben weitere Passagiere sind in derselben Situation: Die Systeme ihrer Autos wurden geknackt, und nun befinden sie sich auf einem fatalen Kollisionskurs. Doch damit nicht genug: Der Hacker streamt das ganze live im Internet, und die Zuschauer entscheiden über Leben und Tod der acht Passagiere …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/e56b75ce071b526f1904f55a0c834e9250342dd3-00-00.jpeg",
        rating: 4.5,
        price: 15.99
      },
      {
        id: 204,
        title: "Das schwarze Schiff",
        author: "Phillip P. Peterson",
        genre: "Science Fiction",
        publishedDate: 2018,
        description:
          "Captain Jeff Austin und seine Crew stranden im interstellaren Leerraum, nachdem ihr Bomber bei einem Einsatz schwer beschädigt wurde. Ihre letzte Hoffnung ist ein riesiges außerirdisches Raumschiff, das scheinbar verlassen zwischen den Sternen treibt. Sie bahnen sich einen Weg hinein. Doch dann wird die Befürchtung zur Gewissheit: Sie sind an Bord nicht allein und schon bald bedrohen unheimliche Wesen die Gestrandeten. Es scheint nur einen Ausweg zu geben: Jeff macht sich mit den letzten Überlebenden auf den Weg zum weit entfernten Zentrum des Schiffes, um dem finsteren Geheimnis der Außerirdischen auf die Spur zu kommen. Doch nichts kann sie auf das Grauen vorbereiten, das tief im Inneren des schwarzen Schiffes auf sie wartet. ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/1cfbbf365d207f1c3db9436b1ce101771bf1a104-00-00.jpeg",
        rating: 4.5,
        price: 14.99
      },
      {
        id: 205,
        title: "Oneiros - Tödlicher Fluch",
        author: "Markus Heitz",
        genre: "Science Fiction",
        publishedDate: 2014,
        description:
          "In Leipzig hütet ein Bestatter ein grausames Geheimnis, in Minsk führt eine skrupellose Wissenschaftlerin tödliche Experimente durch, in Paris rast ein Airbus ungebremst in ein Flughafenterminal … Die Ermittlungen zu dem Unglück beginnen sofort – aber die Ergebnisse sind rätselhaft: Sämtliche Insassen waren schon tot, bevor das Flugzeug auf das Gebäude traf. Was die Polizei jedoch nicht herausfindet, ist, dass es einen Überlebenden gibt. Konstantin Korff, der Bestatter aus Leipzig, kommt diesem Überlebenden hingegen schnell auf die Spur, ebenso wie die Wissenschaftlerin – denn diese drei Menschen tragen denselben tödlichen Fluch in sich. Einen Fluch, der sie zu einer Gefahr für jeden in ihrer Umgebung macht …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/e92b2a096ab3dc1fb19badff23ae3f966fe9f23f-00-00.jpeg",
        rating: 4.1,
        price: 10.99
      },
      {
        id: 206,
        title: "Ich bin Gideon",
        author: "Tamsyn Muir",
        genre: "Science Fiction",
        publishedDate: 2020,
        description:
          "Gideon Nav reicht es. Sie hat genug von dem düsteren Planeten voller verknöcherter Nonnen, starrer Regeln und schwarzer Klamotten, auf dem sie aufgewachsen ist. Genug von einem Leben als Dienerin des Neunten Hauses. Vor allem aber hat sie genug von Harrowhark Nonagesimus, der Erbin eben jenes Hauses, die Gideon mit ihrer herrischen Art das Leben schwer macht. Also packt Gideon ihr Schwert und ihre Pornohefte ein, um endlich von diesem gottverlassenen Planeten zu verschwinden. Doch sie wird erwischt. Die Strafe für ihren Fluchtversuch ist unangenehm: Sie soll Harrowhark als Schwertmeisterin an den kaiserlichen Hof begleiten, wo diese, gemeinsam mit den Erben der anderen royalen Häuser, an einem Wettkampf auf Leben und Tod teilnimmt. Wenn sie den Untergang des Neunten Hauses und ihres Planeten verhindern wollen, müssen die beiden wohl oder übel zusammenarbeiten. Und das, obwohl sie einander auf den Tod nicht ausstehen können – oder?",
        thumbnail:
          "https://assets.thalia.media/img/artikel/1a5cab208cab1e58ffd285303821a0d4a3aaca93-00-00.jpeg",
        rating: 4.1,
        price: 14.99
      },
      {
        id: 207,
        title: "Transport",
        author: "Phillip P. Peterson",
        genre: "Science Fiction",
        publishedDate: 2018,
        description:
          "Transport? Transport wohin, Sir?, fragte Russell skeptisch. Möglicherweise direkt in die Hölle, antwortete General Morrow. Vor der Küste Kaliforniens wird ein außerirdisches Artefakt geborgen, das Menschen zu anderen Sternensystemen transportieren kann. Der zum Tode verurteilte Russell Harris und neun andere Häftlinge bekommen als Versuchspersonen für den Teleporter die Chance, ihr Leben zu retten. Doch das Unternehmen entpuppt sich als gnadenloses Todeskommando, nachdem der erste Freiwillige auf grauenhafte Weise stirbt. Russell und seinen Kameraden wird klar, dass sie das Projekt nicht überleben werden. Der einzige Ausweg besteht darin, das Geheimnis des Artefakts zu lüften. Aber auch das scheint hoffnungslos, denn von den Erbauern fehlt jede Spur. ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/b73416223a33f1c94e99ff034bb99f7479fdc78e-00-00.jpeg",
        rating: 4.8,
        price: 9.99
      },
      {
        id: 208,
        title: "Artemis",
        author: "Andy Weir",
        genre: "Science Fiction",
        publishedDate: 2019,
        description:
          "Willkommen in Artemis! Der ersten und einzigen Stadt auf dem Mond. Eine Stadt, in der zweitausend Menschen fernab der Erde ein neues Zuhause gefunden haben. Eine Stadt, die den Touristen ein unvergleichliches Weltraum-Erlebnis bietet. Eine Stadt, in der es keine Kriminalität gibt – bis zu dem Tag, an dem der erste Mord in Artemis geschieht und eine Reihe von Ereignissen in Gang setzt, die die friedliche Stadt der Zukunft in eine tödliche Falle verwandelt ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/af909f817e1f088473f251054a92c3494d0e8c03-00-00.jpeg",
        rating: 3.2,
        price: 9.99
      },
      {
        id: 209,
        title: "Singularity",
        author: "Joshua Tree",
        genre: "Science Fiction",
        publishedDate: 2021,
        description:
          "Schafft sich die Menschheit selber ab? »Singularity« ist der neue Science-Fiction-Thriller von Bestseller-Autor Joshua Tree über die Zukunft der künstlichen Intelligenz. Ende des 21. Jahrhunderts ist die Menschheit tief gespalten: Während die eine Hälfte medizinisch bestens versorgt ein langes Leben führt, ist die andere schlicht überflüssig. Bestenfalls als billige Arbeitskräfte haben die meisten Menschen ein karges Auskommen. Einer dieser Überflüssigen ist James, der als Hausdiener der neuen Elite anheuert. Von seinem neuen Herrn erhält er einen rätselhaften Auftrag: Er soll dessen vor zwanzig Jahren verschollene Tochter wiederfinden - in einer virtuellen Simulation. Schon bald muss er erkennen, dass nicht bloß die Grenzen von VR und Wirklichkeit verschwimmen, sondern auch die von Mensch und Maschine. Und ihm offenbart sich ein schreckliches Geheimnis, das die Zukunft und Vergangenheit der Menschheit in Frage stellt.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/60ac89248881a9e3a8a9d732211403cf8ed2160e_BF2000-2000.jpeg",
        rating: 4.1,
        price: 16.99
      },
      {
        id: 210,
        title: "The Ark - Die letzte Reise der Menschheit",
        author: "Patrick S. Tomlinson",
        genre: "Science Fiction",
        publishedDate: 2017,
        description:
          "Nachdem die Erde zerstört wurde, sind die letzten 50.000 Menschen auf einem gewaltigen Raumschiff, der Arche, unterwegs zum nächsten bewohnbaren Planeten. Beinahe hundert Jahre hat die Reise bereits gedauert, erst die jetzige Generation von Bewohnern soll die Ankunft erleben. Das Leben an Bord ist streng reglementiert, jeder Bewohner ist über ein Implantat jederzeit zu orten. Dennoch verschwindet der brillante junge Wissenschaftler Edmond Laraby spurlos – und wird kurz darauf tot aufgefunden. Selbstmord, heißt es von offizieller Stelle, doch Detective Bryan Benson hegt Zweifel: Was hat es mit den Aufnahmen von Tau Ceti auf sich, die Laraby ausgewertet hat? Und wie hängt eine Geheimorganisation, deren Mitglieder sich durch Vortäuschen des eigenen Todes der Überwachung entzogen haben, in der Sache mit drin? ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/cb96b710cabda6082baec8e5de038b782ea1c4c4-00-00.jpeg",
        rating: 4.7,
        price: 9.99
      },
      {
        id: 211,
        title: "Andromeda",
        author: "Michael Crichton",
        genre: "Science Fiction",
        publishedDate: 2021,
        description:
          "Eine unbemannte Raumsonde des US-Militärs entdeckt einen außerirdischen Organismus in der oberen Atmosphäre und nimmt eine Probe. Doch bei der Rückkehr zur Erde geschieht das Unfassbare: Die Sonde stürzt in der Nähe der Stadt Piedmont in Arizona ab. Kurze Zeit später sind alle Bewohner der Kleinstadt tot. Die Regierung aktiviert das Project Wildfire und ruft die vier besten Biophysiker in einem unterirdischen Labor zusammen. Sie haben nur wenig Zeit, ein Mittel gegen den extraterrestrischen Organismus zu finden, denn der hermetisch abgeriegelte Bunker wird sich selbst zerstören, wenn die Wissenschaftler versagen ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/fc8f4791b90daa7ffcd47ac044ebc55ec72de173-00-00.jpeg",
        rating: 5.0,
        price: 14.99
      },
      {
        id: 212,
        title: "Lovecraft Country",
        author: "Matt Ruff",
        genre: "Science Fiction",
        publishedDate: 2020,
        description:
          "Wer hat Angst vor dem weißen Mann? Atticus' Verhältnis zu seinem Vater war schon immer schwierig: Von einem Tag auf den anderen ist Montrose Turner nun aber verschwunden. Zusammen mit Onkel George und Jugendfreundin Letitia macht sich Atticus wohl oder übel auf die höchst gefährliche Suche. Denn die Spuren führen nach »Lovecraft Country« in Neuengland, Mitte der 50er Jahre der Ort mit den schärfsten Rassengesetzen der ganzen USA. Als der Gesuchte schließlich gefunden wird, sehen sich die Turners urplötzlich in eine ominöse Geheimlogen- Fehde verwickelt, die durchaus den von Onkel George heißgeliebten Lovecraft-Erzählungen entstammen könnte.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/a1ecdf6bbb917f5e342200e3aaa0064bf0b87d15-00-00.jpeg",
        rating: 4.5,
        price: 11.95
      },
      {
        id: 213,
        title: "Outland - Der geheime Planet",
        author: "Dennis E. Taylor",
        genre: "Science Fiction",
        publishedDate: 2020,
        description:
          "Als ihr Experiment zur Heisenbergschen Unschärferelation schiefgeht, müssen Physikstudent Richard und seine Freunde feststellen, dass sie versehentlich ein Portal zu einer anderen Dimension erschaffen haben. Es führt sie zu einer zweiten Erde, einer Welt, die genauso ist wie unsere – nur dass es dort niemals Menschen gab. Die Studenten sind begeistert, der Nobelpreis ist ihnen so gut wie sicher. Doch dann bricht der Supervulkan im Yellowstone-Nationalpark aus und droht, alles unter einem Regen aus Asche und Lava zu begraben. Die einzige Chance, die den Menschen noch bleibt, ist die vermeintlich schöne, neue Welt auf der anderen Seite des Portals ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/389268c1c9688281b04c8888088731b8c97b17bc-00-00.jpeg",
        rating: 4.0,
        price: 14.99
      },
      {
        id: 214,
        title: "Unheimliche Geschichten",
        author: "Edgar. Allan Poe",
        genre: "Science Fiction",
        publishedDate: 2017,
        description:
          "Der vorliegende erste Band trägt den Titel Unheimliche Geschichten: Poes unvergleichliche Erzählungen – von den Detektivgeschichten wie »Doppelmord in der Rue Morgue« über »Der Gold-Skarabäus« bis hin zu den Grotesken und den visionären Traumbildnissen wie »Ein Sturz in den Malstrøm« – bezeichnen bis heute die Höhepunkte ihrer Gattung, wenn sie sie nicht überhaupt erst begründet haben. Poe steht keineswegs in der Tradition der gothic tales, die von der Romantisierung der Angst leben – denn er hat das Gegenteil getan: Er hat der Angst alles Schauerlich- Beschauliche genommen und ihre zuckenden Herzmuskeln bloßgelegt. Wenn jeder, der seine Einfälle Poe verdankt, so Arthur Conan Doyle, den zehnten Teil seiner Einnahmen opfern müsste, könnte diesem ein Denkmal errichtet werden, das größer ist als die Pyramiden… Enthalten sind: ›Der Doppelmord in der Rue Morgue‹, ›Der entwendete Brief‹, ›Der Gold-Skarabäus‹, ›Ente einer Ballonfahrt‹, ›Das beispiellose Abenteuer eines gewissen Hans Pfaall‹, ›»Manuskript in Flasche gefunden«‹, ›Ein Sturz in den Malstrøm‹, ›Die Fakten im Fall von M. Valdemar‹, ›Mesmerische Offenbarung‹, ›Eine Geschichte aus den Ragged Mountains‹, ›Morella‹, ›Ligeia‹ und ›Metzengerstein‹.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/c2a8ef007203313fce24946e827a541eb94dcea7-00-00.jpeg",
        rating: 5.0,
        price: 28.0
      },
      {
        id: 215,
        title: "Ein weißer Schwan in Tabernacle Street",
        author: "Ben Aaronovitch",
        genre: "Science Fiction",
        publishedDate: 2020,
        description:
          "Peter Grant, unser Londoner Lieblings-Bobby und Zauberlehrling, steht vor völlig neuen privaten Herausforderungen. Welche ihn zu gleichen Teilen mit Panik und Begeisterung erfüllen. Beruflich bekommt er es mit der Serious Cybernetics Corporation zu tun, dem neuesten Projekt des Internet-Genies Terrence Skinner. Und prompt holt die Magie ihn wieder ein. Denn in den Tiefen der SCC ist ein Geheimnis verborgen: eine geheime magische Technologie, die bis weit ins 19. Jahrhundert zurückreicht, dem Zeitalter von Ada Lovelace und Charles Babbage. Und die brandgefährlich ist für die gesamte Welt.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/a34997b7f76f14317b093955fc9d979e387edd60-00-00.jpeg",
        rating: 4.4,
        price: 15.0
      },
      {
        id: 216,
        title: "The Watchers - Wissen kann tödlich sein",
        author: "John Marrs",
        genre: "Science Fiction",
        publishedDate: 2021,
        description:
          "Im digitalen Zeitalter sind Informationen wertvoller als Gold. Doch Computer können gehackt und Files gestohlen werden. Nach einem massiven Cyberangriff fürchtet die britische Regierung um ihre Staatsgeheimnisse und entwickelt einen ebenso riskanten wie genialen Plan: die brisantesten Informationen werden offline genommen, in einen genetischen Code umgewandelt und fünf Zivilisten implantiert. Dafür bekommen diese so genannten Wächter die Chance auf ein neues Leben, eine neue Identität und finanzielle Unabhängigkeit. Auf keinen Fall aber dürfen sie Kontakt zueinander aufnehmen, denn gemeinsam kennen sie jede noch so schmutzige Parteiaffäre, die Wahrheit über Lady Di's Tod und die intimsten Geheimnisse der Queen. Doch jeder der Wächter verfolgt eine eigene Agenda, und schon bald entwickelt das Regierungsprojekt eine Dynamik, in der niemand mehr weiß, wem er eigentlich noch trauen kann ...",
        thumbnail:
          "https://assets.thalia.media/img/artikel/b158d6040d7514d09f790ddf4a1be17ee22b79c6-00-00.jpeg",
        rating: 3.8,
        price: 15.99
      },
      {
        id: 217,
        title: "Ich  bin Harrow",
        author: "Tamsyn Muir",
        genre: "Science Fiction",
        publishedDate: 2021,
        description:
          "Es herrscht Krieg im Imperium – ein Krieg, von dem die meisten Planeten bislang verschont wurden. Zu verdanken haben sie dies dem aufopfernden Dienst der neun Nekromanten, die dem Imperator im Kampf gegen die Angriffe eines todbringenden Feindes helfen. Harrow Nonagesimus, die Erbin des Neunten Hauses, ist nun eine von ihnen – doch der Dienst, der von ihr verlangt wird, ist so ganz anders als erwartet. Und sie weiß nicht, ob sie ihn überleben wird …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/f539a1362e5445917774134a3ca0b21e54f8400f-00-00.jpeg",
        rating: 4.3,
        price: 14.99
      },
      {
        id: 218,
        title: "Die Tyrannei des Schmetterlings",
        author: "Frank Schätzing",
        genre: "Science Fiction",
        publishedDate: 2019,
        description:
          "Kalifornien, Sierra Nevada. Luther Opoku, Sheriff der verschlafenen Goldgräberregion Sierra in Kaliforniens Bergwelt, hat mit Kleindelikten, illegalem Drogenanbau und steter Personalknappheit zu kämpfen. Doch der Einsatz an diesem Morgen ändert alles. Eine Frau ist unter rätselhaften Umständen in eine Schlucht gestürzt. Unfall? Mord? Die Ermittlungen führen Luther zu einer Forschungsanlage, einsam gelegen im Hochgebirge und betrieben von der mächtigen Nordvisk Inc., einem Hightech-Konzern des zweihundert Meilen entfernten Silicon Valley. Zusammen mit Deputy Sheriff Ruth Underwood gerät Luther bei den Ermittlungen in den Sog aberwitziger Ereignisse und beginnt schon bald an seinem Verstand zu zweifeln. Die Zeit selbst gerät aus den Fugen. Das Geheimnis im Berg führt ihn an die Grenzen des Vorstellbaren - und darüber hinaus.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/a694d08fc6868daaa57ac522a2a0322a70f776eb-00-00.jpeg",
        rating: 3.2,
        price: 14.0
      },
      {
        id: 219,
        title: "Wolfsmund / Der dunkle Turm Bd. 5",
        author: "Stephen King",
        genre: "Science Fiction",
        publishedDate: 2004,
        description:
          "Lange mussten die Fans ausharren, doch das Warten hat sich gelohnt. Wolfsmond, der fünfte Band des monumentalen Romanwerks „Der Dunkle Turm“ hält alles, was man von einem großen Opus erwarten kann – Fantasy, Horror, Science-Fiction, Western, Thriller, Abenteuergeschichte und Liebesroman verschmelzen zu einem packenden Lesevergnügen, das Lust auf die beiden abschließenden Werke des Zyklus macht.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/df9dfacc744dfbeba7381b92ce9af5a989ec5857-00-00.jpeg",
        rating: 4.1,
        price: 11.99
      },
      {
        id: 220,
        title: "One second after - Die Welt ohne Stuirm",
        author: "William R. Forstchen",
        genre: "Science Fiction",
        publishedDate: 2019,
        description:
          "Was wäre, wenn jemand vorhätte, die USA anzugreifen? Wäre es da nicht strategisch klug, dem Land der unbegrenzten Möglichkeiten zunächst den Schutz durch die überlegene Technologie zu rauben? Was wäre, wenn es eine Waffe gäbe, die alles Elektronische ausschalten könnte? Diese Waffe könnte bereits in den Händen der Feinde sein … John Matherson, Geschichtsprofessor und Ex-Colonel, lebt mit seiner Familie in einer friedlichen Kleinstadt in den Bergen North Carolinas. Doch die Idylle findet ein jähes Ende, als ein EMP die kompletten Vereinigten Staaten lahmlegt. Alle elektronischen Geräte – Autos, Computer, Radios, Flugzeuge – funktionieren von einer Sekunde auf die andere nicht mehr. Die Gesellschaft bricht erschreckend schnell zusammen, und John muss sich eine entscheidende Frage stellen: Wie weit würdest du gehen, um deine Familie und deine Heimat zu schützen? ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/f76ae6f419064c616f4dfeb7f9b5720b8cf91570-00-00.jpeg",
        rating: 5.0,
        price: 14.99
      },
      {
        id: 300,
        title: "Simons Katze - Kätzchencahaos",
        author: "Simon Tofield",
        genre: "Comic/Cartoon",
        publishedDate: 2011,
        description:
          "Simons Katze ist ein absolut hinreißender, pfiffiger und verspielter Haustiger, der eigentlich permanent und trickreich auf Futtersuche ist. Simons liebevolle Zuwendung und ungeteilte Aufmerksamkeit ist ihr sicher. Bis eines Tages ein neuer Mitbewohner auftaucht – ein flauschiges, tapsiges Katzenbaby – und für jede Menge Ablenkung sorgt. Immer und überall steht dieses putzige, kleine Katzenbündel nun mit seinen riesengroßen Augen im Weg und probiert neugierig alles aus, was Spiel und Spaß verheißt. Und das auch noch zur hellen Freude von Dosenöffner Simon. Alles muss Simons Katze jetzt gegen Besetzung und hemmungslose Verwüstung durch den kleinen Eindringling in seinem Revier verteidigen – den geliebten Sonnenplatz im Wohnzimmer, den Fressnapf, das Katzenklo … erstaunlich, was so ein Katzenbaby alles durcheinander bringen kann",
        thumbnail:
          "https://assets.thalia.media/img/artikel/2ab44a1a444e2f48c2ed1f0c83673c9a46df36f8-00-00.jpeg",
        rating: 5.0,
        price: 12.0
      },
      {
        id: 301,
        title: "Harleen Bd. 1",
        author: "Stjepan Sejic",
        genre: "Comic/Cartoon",
        publishedDate: 2020,
        description:
          "Die Psychologin Dr. Harleen Quinzel will Gotham City von dem Wahnsinn kurieren, der Batmans finstere Stadt befallen hat. Für ihre Studien spricht sie in der Irrenanstalt Arkham Asylum mit Poison Ivy und vielen anderen Superkriminellen und erhält sogar die Gelegenheit, mit Commissioner Gordon und dem Dunklen Ritter zu reden. Doch Harleens größte Faszination gilt dem in Einzelhaft eingesperrten Joker, dem sie mehr und mehr verfällt. Unterdessen wird auch Staatsanwalt Harvey Dent ein Opfer der Finsternis … ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/468671c0a35fb7c25993806e62c0028c172c5825-00-00.jpeg",
        rating: 5.0,
        price: 14.99
      },
      {
        id: 302,
        title: "The boy, the mole, the fox and the horse",
        author: "Charlie Mackesy",
        genre: "Comic/Cartoon",
        publishedDate: 2019,
        description:
          "What do you want to be when you grow up? asked the mole. Kind, said the boy.  Charlie Mackesy offers inspiration and hope in uncertain times in this beautiful book, following the tale of a curious boy, a greedy mole, a wary fox and a wise horse who find themselves together in sometimes difficult terrain, sharing their greatest fears and biggest discoveries about vulnerability, kindness, hope, friendship and love. The shared adventures and important conversations between the four friends are full of life lessons that have connected with readers of all ages.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/80e103eb676e91dfc6f2ad94f63f36dddd408492-00-00.jpeg",
        rating: 5.0,
        price: 21.99
      },
      {
        id: 303,
        title: "Frida Kahlo",
        author: "Maria Hesse",
        genre: "Comic/Cartoon",
        publishedDate: 2018,
        description:
          "Die erste illustrierte Biografie von Frida Kahlo: Inspiriert von der Intensität Frida Kahlos und ihren bekanntesten Bildern erzählt die spanische Künstlerin María Hesse in einer reich illustrierten Biografie vom Lieben und Schaffen der mexikanischen Ikone. Ihre Zeichnungen, die mit jenen Frida Kahlos eine beinahe magische Symbiose eingehen, werfen ein ganz besonderes Licht auf dieses einzigartige Leben. Ein Körper, gezeichnet von Schmerz und Leidenschaft, eine Fantasie bevölkert von betörenden wie verstörenden Bildern, ein begeisterungsfähiger und beharrlicher Blick auf die Welt – Frida Kahlos Anziehungskraft ist nach wie vor ungebrochen. Mit einer unvergleichlichen Willenskraft trotze sie den Bürden, die ihr das Leben zumutete, lebte mit einem freien Geist, liebte mit offenem Herzen und schuf Kunstwerke von einer strahlenden Wirkmacht. Für die Weigerung, im Schatten ihrer großen Liebe Diego Rivera zu leben, und für ihren mutigen Bruch mit den gesellschaftlichen Konventionen wird Frida Kahlo noch heute auf der ganzen Welt verehrt.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/818d2f489428651333f734527ece2248786762fc-00-00.jpeg",
        rating: 5.0,
        price: 20.0
      },
      {
        id: 304,
        title: "Herzschlag ins Gesicht",
        author: "Bente Theuvsen",
        genre: "Comic/Cartoon",
        publishedDate: 2021,
        description:
          "In ihren Cartoons bringt Bente Theuvsen Alltagssituationen aus dem Elterndasein witzig und pointiert aufs Blatt. Ob ewige Klamottendiskussionen, das Ausplaudern von allerhand Peinlichkeiten oder ungewünschter Wahrheiten - irgendwie muss man die Kleinen doch immer wieder ins Herz schließen. Vor allem, wenn sie Geralt von Riva sogar von Luke Skywalker unterscheiden können.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/2bb7560f6b208f44655c2a39fe72b628e1ac8517-00-00.jpeg",
        rating: 5.0,
        price: 16.0
      },
      {
        id: 305,
        title: "My hera academica 1",
        author: "Kohei Horikoshi",
        genre: "Comic/Cartoon",
        publishedDate: 2016,
        description:
          "Wie würde eine Welt aussehen, in der 80 Prozent der Bevölkerung Superkräfte besäßen? Helden und Bösewichte würden sich quasi pausenlos bekämpfen. Doch wie und wo könnten die Helden lernen, ihre Fähigkeiten, die sogenannten »Macken« effizienter zu nutzen? Natürlich an einer Schule speziell für junge Helden! Und was ist mit den 20 Prozent der Bevölkerung, die ohne Superkräfte in diese Welt geboren wurden? Der Schüler Izuku Midoriya möchte nichts sehnlicher als Superheld zu sein, aber in ihm steckt nicht ein Quäntchen einer Superhelden-Macke! Und ohne Macken hat er null Chance, jemals auch nur einen Fuß in die U.A. High School für Superhelden zu setzen. Izukus Leben scheint völlig sinnlos – bis er eines Tages All Might, den Superhelden aller Superhelden trifft! Diese Begegnung könnte den Wendepunkt seines Lebens einläuten…",
        thumbnail:
          "https://assets.thalia.media/img/artikel/9a800107a6e87e97ac0fe7d4bd1222db8c22d758-00-00.jpeg",
        rating: 4.9,
        price: 6.99
      },
      {
        id: 306,
        title: "Asterix 23 - Obelix GmbH & Co. KG",
        author: "René Goscinny, Albert Uderzo",
        genre: "Comic/Cartoon",
        publishedDate: 2013,
        description:
          "Im Jahre 45 nach der ersten Veröffentlichung in Deutschland erfährt Asterix die erste große Überarbeitung! In sorgfältiger Detailarbeit wurden alle 34 Asterix-Alben einheitlich koloriert und die Sprechblasen neu gelettert. Die Covergestaltung wurde behutsam modifiziert, einige Cover sogar von Asterix-Zeichner Albert Uderzo persönlich neu gezeichnet! Damit ist der große Erfolg Asterix fit für ein neues Jahrhundert und darf sich auf eine glorreiche Zukunft freuen!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/962cac6bcdf73660ccf3528685da5505f951b249-00-00.jpeg",
        rating: 5.0,
        price: 12.0
      },
      {
        id: 307,
        title: "Demon Slayer 2",
        author: "Koyoharu Gotouge",
        genre: "Comic/Cartoon",
        publishedDate: 2020,
        description:
          "Um seine Schwester zu retten und seine Familie zu rächen, ist Tanjiro aufgebrochen, um zu einem Demon Slayer zu werden. Doch um die Aufnahmeprüfung für die berüchtigten Dämonenjäger zu bestehen, ist hartes Training gefordert. Da verschwinden plötzlich in einem benachbarten Dorf mehrere junge Mädchen. Tanjiro beschließt, die Vorfälle zu untersuchen. Wird er hier eine Spur zu dem Dämon finden, der seine Familie ermordet hat …?",
        thumbnail:
          "https://assets.thalia.media/img/artikel/7dd170a4881589353cfdf2f663913601e730d60b-00-00.jpeg",
        rating: 0,
        price: 10.0
      },
      {
        id: 308,
        title: "Asterix 01 - Asterix der Gallier",
        author: "René Goscinny, Albert Uderzo",
        genre: "Comic/Cartoon",
        publishedDate: 2013,
        description:
          "Im Jahre 45 nach der ersten Veröffentlichung in Deutschland erfährt Asterix die erste große Überarbeitung! Nach sorgfältiger Detailarbeit liegen jetzt alle 34 Alben einheitlich koloriert und in der Schrift Albert Uderzos gelettert vor. Die Covergestaltung wurde behutsam modifiziert, einige Cover sogar von Asterix-Zeichner Albert Uderzo persönlich neu gezeichnet! Damit ist der große Erfolg Asterix fit für ein neues Jahrhundert und darf sich auf eine glorreiche Zukunft freuen!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/f6e884c9223e8c76bda49986fb571bd50a77bd24-00-00.jpeg",
        rating: 4.5,
        price: 12.0
      },
      {
        id: 309,
        title: "Szenen einer Ehe",
        author: "Loriot",
        genre: "Comic/Cartoon",
        publishedDate: 2005,
        description:
          "Szenen einer Ehe sind oft Eheszenen, besonders wenn das Frühstücksei nicht lange genug gekocht hat, der Fernseher kaputt ist oder über Politik gesprochen wird. Und wer meint, dann könne nur noch eine Eheberatung helfen, der wird von Loriot eines Besseren belehrt. Vielleicht kann man – wie Loriot – über die Ehe nur einen wahren Satz sagen: Männer und Frauen passen einfach nicht zusammen …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/52dc92c380c114cd3fef1a29fc8a1a272fee04a2-00-00.jpeg",
        rating: 5.0,
        price: 11.0
      },
      {
        id: 310,
        title: "Endlich Nichtraucher für Lesemuffel",
        author: "Allen Carr",
        genre: "Comic/Cartoon",
        publishedDate: 2007,
        description:
          "Schluss mit dem blauen Dunst! Allen Carr zeigt den Weg, ganz ohne schulmeisterliche Belehrungen und Schreckensszenarien, sondern auf humorvolle und eingängige Weise mit Comics. Seine sensationelle „Easyway“-Methode zielt auf den Wandel der inneren Einstellung – und der Erfolg gibt ihm Recht: Bereits Millionen langjährige Raucher haben mit Allen Carr der Nikotinsucht die rote Karte gezeigt. Dauerhaft!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/f1d05a81dad4472011618d0b8a44de44584171e3-00-00.jpeg",
        rating: 4.0,
        price: 8.0
      },
      {
        id: 311,
        title: "Demon Slayer 1",
        author: "Koyoharu Gotouge",
        genre: "Comic/Cartoon",
        publishedDate: 2020,
        description:
          "Japan zur Zeit der Taisho-Ära. Tanjiro Kamado verdient seinen Lebensunterhalt damit, Kohle zu verkaufen. Doch sein friedliches Leben nimmt eine abrupte Wende, als ein Dämon seine Familie überfällt und brutal tötet. Allein Tanjiros kleine Schwester Nezuko überlebt – doch verwandelt in einen Dämon trachten ihr die Menschen nach dem Leben. Um seine Schwester zu retten und seine Familie zu rächen, bricht Tanjiro auf eine gefährliche Reise auf … ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/b83c7fa2cf788c26b9429f8c5faa02f688fdd04b-00-00.jpeg",
        rating: 4.7,
        price: 10.0
      },
      {
        id: 312,
        title: "Demon Slayer 3",
        author: "Koyoharu Gotouge",
        genre: "Comic/Cartoon",
        publishedDate: 2020,
        description:
          "Auf der Suche nach einer Spur des Dämons, der ihre Familie ermordet hat, treffen Tanjiro und Nezuko auf zwei mächtige Dämonen, die mit tödlichen, magischen Waffen zum Angriff übergehen. Selbst mit der Hilfe von Tamayo und Yushiro sind diese Gegner der Demon-Slayer-Truppe weit überlegen. Doch Tanjiro kann nicht aufgeben! Denn ein Sieg würde ihn endlich dem Dämon Kibutsuji näherbringen – und einer Chance auf Rache …",
        thumbnail:
          "https://assets.thalia.media/img/artikel/57ee62ccd793b8368282eb9b4aafb62747dd4e89-00-00.jpeg",
        rating: 0.0,
        price: 10.0
      },
      {
        id: 313,
        title: "Der Golemkönig",
        author: "Paluten, Haiko Hörnig",
        genre: "Comic/Cartoon",
        publishedDate: 2019,
        description:
          "Dieses Mal dreht sich alles um den kleinen Golem Iggi, bekannt aus dem YouTube-Projekt FREEDOM, der durch einen rätselhaften Kristall eine fliegende Stadt voller Golems herbeiruft. Paluten und seine Freunde sind in höchster Alarmbereitschaft! Doch die Golems erweisen sich als überaus freundlich und nehmen Iggi wie einen verschollenen Bruder auf. In ihrer Stadt erwartet ihn ein wundervolles Leben an der Seite des Golem-Königs, wenn er sich als würdig erweist. Iggi gibt alles, denn er will unbedingt ein mächtiger Golem werden. Im Moment seines größten Erfolges jedoch entdeckt Paluten eine schreckliche Wahrheit: Jemand spielt ein falsches Spiel! Um Iggi und die Golems zu warnen, ist es längst zu spät. Paluten und Edgar müssen selbst aktiv werden, wenn sie Iggi retten wollen – und mit ihm die ganze Stadt. Folgt Paluten, seinem besten Freund Edgar, Professor Ente und General Dieter in ein neues Abenteuer. Jede Menge Action und Explosions erwarten euch!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/7868416badeda0249f2dfff2c081e51018f9f098-00-00.jpeg",
        rating: 4.8,
        price: 15.0
      },
      {
        id: 314,
        title: "Black Butler Bd. 1",
        author: "Yana Toboso",
        genre: "Comic/Cartoon",
        publishedDate: 2010,
        description:
          "Ein teuflisch guter Butler ist Sebastian Michaelis, der dem Familienoberhaupt der noblen Phantomhives dient. Teuflisch ist hier wörtlich zu nehmen, denn Sebastian ist wirklich ein Dämon, mit dem das Oberhaupt der Phantomhives einen Pakt schloss. Seitdem hat er nicht nur die wichtigste Position in der Dienerschaft inne, sondern ist auch Leibwächter und Auftragskiller in Personalunion! Earl of Phantomhive ist der 12-jährige Ciel, der nicht nur das Familienunternehmen führt, sondern in seiner Funktion als Earl auch ein wichtiger Vertrauter Königin Victorias ist. Denn sie verlässt sich darauf, dass jede Gefahr diskret und schnell durch die Phantomhives beseitigt wird... ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/bf2482d88f54bc962b1ed0d2098c98f2860a9e04-00-00.jpeg",
        rating: 5.0,
        price: 6.95
      },
      {
        id: 315,
        title: "Black Butler Bd. 2",
        author: "Yana Toboso",
        genre: "Comic/Cartoon",
        publishedDate: 2010,
        description:
          "Aufgrund eines mysteriösen Briefs begibt sich der junge Earl Phantomhive in Begleitung seines Butlers Sebastian nach London. Derzeit verbreitet »Jack the Ripper« dort Angst und Schrecken... ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/ba99409357c7aac824cb0793ae74ebf272c13eac-00-00.jpeg",
        rating: 5.0,
        price: 6.95
      },
      {
        id: 316,
        title: "Black Butler Bd. 3",
        author: "Yana Toboso",
        genre: "Comic/Cartoon",
        publishedDate: 2010,
        description:
          "Ende des 19. Jahrhunderts erschüttert eine Serie blutiger Morde das viktorianische England. Lediglich ein Butler kommt dem Verbrecher auf die Spur. Und als er sieht, wer der mysteriöse »Jack the Ripper« wirklich ist, funkeln seine dunklen Augen vor Vergnügen! ",
        thumbnail:
          "https://assets.thalia.media/img/artikel/3c377ae6741a9a30f8caed48f579898a53e1f355-00-00.jpeg",
        rating: 5.0,
        price: 6.95
      },
      {
        id: 317,
        title: "Geschafft: Was Mann mit 60 nicht mehr tun muss",
        author: "Michael Kernbach",
        genre: "Comic/Cartoon",
        publishedDate: 2011,
        description:
          "Happy Birthday! Doch wenn die Zahl der Kerzen auf dem Kuchen steigt, schleicht sich leicht auch etwas Wehmut in die Feierlaune … Warum bloß? Es gibt doch so viel, was Frauen und Männer mit zunehmendem Alter endlich nicht mehr machen müssen! Wie so oft ist es jenseits des Zaunes viel schöner, als man es sich vorstellen mochte. Viel Spaß im besten Alter!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/75c14d97425da62b621026ef9d412035184de87d-00-00.jpeg",
        rating: 5.0,
        price: 6.0
      },
      {
        id: 318,
        title: "Schattenspringer Bd. 3",
        author: "Daniely Schreiter",
        genre: "Comic/Cartoon",
        publishedDate: 2018,
        description:
          "Wer einen Autisten kennt, kennt genau EINEN Autisten, sagt sich Daniela Schreiter im dritten Band von Schattenspringer. Sie macht sich auf, andere Betroffene zu interviewen. Wie immer kombiniert sie dies mit ihren eigenen Erfahrungen und schafft es ein weiteres Mal, wundervoll unterhaltend über ein scheinbares Tabuthema aufzuklären, ohne dabei in Leidensgeschichten abzugleiten oder belehrend zu wirken.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/74285b09a790d892e0699ccdb299902a9e7f525c-00-00.jpeg",
        rating: 4.9,
        price: 20.0
      },
      {
        id: 319,
        title: "Batman: Das erste Jahr (Neuausgabe)",
        author: "Frank Miller, David Mazzucchelli",
        genre: "Comic/Cartoon",
        publishedDate: 2018,
        description:
          "Die Geburt einer Legende! Bestseller-Autor Frank Miller (300, Sin City) und der Comic-Künstler David Mazzucchelli erzählen in dieser Graphic Novel die Entstehungsgeschichte des Dunklen Ritters neu. Seit der ersten Veröffentlichung in den 1980er-Jahren wurde das Werk mit Preisen überhäuft und gilt als die definitive Ursprungsgeschichte des finsteren Rächers von Gotham City. Dieser Band legte den Grundstein für viele aufregende Storys und hat bis heute nichts von seinem düsteren Charme, der dramaturgischen Dichte und der psychologischen Eindringlichkeit verloren. Dieser Band beinhaltet die komplett überarbeitete Übersetzung des Meisterwerks.",
        thumbnail:
          "https://assets.thalia.media/img/artikel/f4dead426873b512a3ae30cf753e3cc543474c70-00-00.jpeg",
        rating: 4.0,
        price: 9.99
      },
      {
        id: 320,
        title: "Marvel Kids: Avengers",
        author: "Jeff Parker, Manuel Garcia",
        genre: "Comic/Cartoon",
        publishedDate: 2018,
        description:
          "Captain America, Iron Man, Hulk, Giant-Girl, Spider-Man sowie die Mutanten Wolverine und Storm sind die mächtigsten Helden der Welt! Als Avengers bekämpfen sie alle Schurken auf der Erde und aus dem Weltraum. Doch jetzt müssen sie sich Seite an Seite der größten Bedrohung ihres Lebens stellen: dem brandgefährlichen militärischen Computer-Verteidigungssystem Ultron, das die Helden ersetzen soll! Außerdem sorgt ein superschlauer Erzfeind des grünen Goliaths Hulk für jede Menge Ärger… Rasante, actiongeladene Avengers-Abenteuer mit den Helden aus den Marvel-Filmen und einem Team, wie ihr es noch nie gesehen habt!",
        thumbnail:
          "https://assets.thalia.media/img/artikel/7207699b9b7c67b45e3e8bb82d0cbc6345c23e21-00-00.jpeg",
        rating: 3.0,
        price: 7.99
      }
    ];
  }
  _setState = (obj) => {
    this._state = obj;
  };

  chooseGenre = () => {
    const message = this.createChatBotMessage(
      "Aus welchem Genre soll das Buch sein? Wenn du nach einem anderen Genre suchst, tippe den Namen ein.",
      {
        widget: "genre"
      }
    );
    this.addMessageToState(message);
  };

  chooseAuthor = () => {
    const message = this.createChatBotMessage(
      "Von welchem Autor soll das Buch sein? Wenn du nach einem anderen Autor suchst, tippe den Namen ein.",
      {
        widget: "author"
      }
    );
    this.addMessageToState(message);
  };

  recommendGenre = (g) => {
    this._setState({ ...this._state, genre: g });
    const recBooks = this.books.filter((b) => {
      return b.genre === g;
    });
    this.setState((state) => ({
      ...state,
      recommendedBooks: recBooks
    }));
    //if (this._state.author === "") {
    //const recBooks = this.books.filter((b) => {
    // return b.genre === g;
    //});
    //this._setState({ ...this._state, bookStorage: recBooks[0] });
    //} else {
    //const recBooks = this.books.filter((b) => {
    //return b.genre === g && b.author === this._state.author;
    // });
    // this._setState({ ...this._state, bookStorage: recBooks[0] });
    //}
    this.recommend();
  };

  async fetchBookHandler(aspect) {
    let name = aspect;
    //const searchAspect = this.state.
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${this.state.a}&orderBy=newest&maxResults=3`
    );
    const data = await response.json();
    const transformedData = data.items.map((bookData) => {
      return {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        author: bookData.volumeInfo.authors
      };
    });
    console.log(transformedData);
    this.setState((state) => ({ ...state, books: transformedData }));
    //this.setState({book: transformedData[this.state.index]});
    //this.setState({index: +=1});
  }

  recommend = () => {
    const message = this.createChatBotMessage("Mein Vorschlag für dich:", {
      widget: "book"
    });
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Wie möchtest du fortfahren? Möchtest du das Buch kaufen? Du kannst mir auch sagen, was dir an der Empfehlung nicht gefällt. Oder du kannst die Suche beenden.",
      {
        widget: "choices"
      }
    );
    this.addMessageToState(message2);
  };

  buyBook = () => {
    const message = this.createChatBotMessage(
      "Prima! Ich habe das Buch in deinen Warenkorb gelegt."
    );
    this.addMessageToState(message);
    this.endConv();
  };

  endConv = () => {
    const message = this.createChatBotMessage(
      "Vielen Dank für deinen Besuch. Bis bald!"
    );
    this.addMessageToState(message);
    const message2 = this.createChatBotMessage(
      "Kehre nun zum Fragebogen zurück."
    );
    this.addMessageToState(message2);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
