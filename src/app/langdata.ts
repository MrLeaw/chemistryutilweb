export let LANGDATA = {
  de: {
    infoTop:
      "Dieses Projekt wurde realisiert von Felix Neumann und Emil Hausmann.",
    settings: "Einstellungen",
    language: "Sprache",
    chemistryUtil: "Chemie Utility",
    cookieMessage:
      "Diese Webseite benutzt Cookies um das Nutzererlebnis zu optimieren.",
    elementList: "Liste der Elemente",
    atomicNumber: "Ordnungszahl",
    symbol: "Symbol",
    name: "Name",
    molarMass: "molare Masse (g/mol)",
    molarMassTitle: "Molare Masse",
    electronegativity: "Elektronegativität (Pauling)",
    nucleonNumber: "Nukleonenanzahl",
    density: "Dichte (g/cm^3 bzw. g/l)",
    meltingPoint: "Schmelzpunkt (°C)",
    boilingPoint: "Siedepunkt (°C)",
    state: "Zustand (20°C)",
    gas: "gasförmig",
    liquid: "flüssig",
    solid: "fest",
    formulaBalancer: "Formelausgleicher",
    stoichiometry: "Stöchiometrie",
    formulaBalancerHint1:
      "Tiefgestellte Zahlen sind als normale Zahlen zu schreiben. (z.B. H2O)",
    formulaBalancerHint2: "Es sind nur Summenformeln zulässig.",
    formulaBalancerHint3:
      "Als Reaktionspfeil ist ein einfaches = zu verwenden.",
    formulaBalancerHint4: "Klammern sind nicht zulässig.",
    go: "Los",
    enterFormulaHere: "Formel hier eingeben",
    stoichiometryHint1:
      "Beide Stoff-Felder müssen mit Summenformeln ausgefüllt werden. Entweder ein Masse oder ein Stoffmenge Feld muss freigelassen werden.",
    stoichiometryHint2: "Klammern sind nicht zulässig.",
    substance1: "Stoff 1",
    substance2: "Stoff 2",
    mass1: "Masse 1",
    mass2: "Masse 2",
    amount1: "Stoffmenge 1",
    amount2: "Stoffmenge 2",
    molarMassHint1: "Ein Molekül als Summenformel eingeben.",
    molarMassHint2: "Klammern sind nicht zulässig.",
    enterMoleculeHere: "Molekül hier eingeben",
    theme: "Design",
    credits: "Namensnennung",
    dark: "Dunkel",
    light: "Hell",
    bisque: "Biskuit",
    black: "Schwarz",
    blue: "Blau",
    green: "Grün",
    red: "Rot",
    designConcept: "Design Konzept",
    font: "Schriftart",
    space: "Weltraum",
    particles: "Partikel",
    unitsTitle: "Einheitenumrechner",
    help: "Hilfe",
    websiteHelp: "Website-Hilfe",
    delphiHelp: "Delphi-Hilfe",
    privandimp: "Datenschutz und Impressum",
    privacy: "Datenschutz",
    copy: "Kopieren",
    impress: "Impressum",
    webHelp: `
    <h2>Reaktionsausgleicher</h2>
    Die Formel der auszugleichenden Reaktion wird in das Eingabefeld eingetragen bzw. kopiert.
    <br>
    <br>
    <img src="assets/images/help/web/1.PNG"> <br><br>
    Dabei gilt:
    <ul>
<li>Alle Stoffe (Edukte und Produkte) müssen als Summenformeln angegeben werden.</li>
<li>Tiefgestellte Zahlen müssen als „normale“ Zahlen geschrieben werden (sprich: H<sub>2</sub>O → H2O)</li>
<li>Der Reaktionspfeil, bzw. das Zeichen zur Abtrennung der Edukte und Produkte der Reaktion muss als einfaches = geschrieben werden (sprich: 2H2 + O2 = 2H2O)
<ul><li>Leerzeichen in der Gleichung sind irrelevant und werden von Programm / Website ignoriert</li></ul></li>
<li>Klammern dürfen in der Reaktionsgleichung nicht benutzt werden</li>
    </ul>
Wenn die Reaktionsgleichung mit den entsprechenden Bedingungen in das Eingabefeld eingetragen wurde, wird der Ausgleichungsprozess mit dem Button „Los“ bzw. der Enter-Taste gestartet. <br>
    
    <p><img src="assets/images/help/web/1.PNG"></p><p>Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben. </p>
<p>Sollte es keinen Fehler geben, wird die ausgeglichene Reaktionsgleichung ausgegeben und kann durch den Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
</br>
    <h2>Liste der Elemente</h2>
Diese Liste beinhaltet alle bereits bekannten Elemente (Stand: Juni 2020), deren Namen, Symbol und einige wichtige Werte. Dabei ist folgendes zu beachten:
  
<ul>
<li>Die Einheit der Dichte für die verschiedenen Elemente ist vom Aggregatzustand bei 20°C (letzte Spalte der Tabelle) abhängig
<ul><li>Die Dichte für die Stoffe mit dem Aggregatzustand „fest“ bei 20°C ist in der Einheit g/cm<sup>3</sup> angegeben</li>
<li>Die Dichte für die Stoffe mit dem Aggregatzustand „flüssig“ und „gasförmig“ bei 20°C ist in der Einheit g/l angegeben</li></ul></li>
<li>Bei Elementen mit hoher Ordnungszahl (etwa ab Ordnungszahl 95), welche teilweise aufgrund von Instabilität nur für Bruchteile von Sekunden in kleinsten Mengen im Labor erzeugt werden können, fehlen viele Werte, da diese nie ermittelt werden konnten
<ul><li>Die meisten vorhandenen Werte von Elementen mit hoher Ordnungszahl sind errechnete bzw. theoretisch angenommene Werte</li></ul></li>
<li>Werte wie die molare Masse aus der Tabelle werden auch in anderen Teilen der Webseite / des Programmes benutzt</li>


</ul>

<p>Die meisten Werte wurden, soweit vorhanden, aus der App / Webseite der Merck KGaA, Darmstadt, Deutschland entnommen. Weitere Werte wurden den Wikipedia-Einträgen der jeweiligen Elemente, bzw. der Website chemie.de entnommen.
</p>
<p>
Obwohl lange an der Genauigkeit der Werte in der Tabelle gearbeitet wurde, können trotzdem kleinere Ungenauigkeiten vorhanden sein. 
</p>
<p>
Fällt ihnen eine Ungenauigkeit oder ein falscher Wert auf, bitten wir sie, sich an die Adresse <a href="mailto:chemistryutility@gmail.com">chemistryutility@gmail.com</a> zu wenden, damit der Fehler behoben werden kann. Vielen Dank.
</p> </br>
<h2>Stöchiometrie</h2>
<p>Die Stöchiometrie auf der Website / im Programm erfolgt nach der Grundgleichung  M=m/n. Dabei gilt:</p>
<ul>
<li>In die Felder „Stoff 1“ und „Stoff 2“  müssen die Summenformeln der benutzten Stoffe eingetragen werden
<ul><li>Das Programm / die Website berechnet die molare Masse des Stoffes automatisch mit Werten aus der Tabelle</li></ul></li>
<li>Alle Felder, bis auf ein Masse-/Stoffmengenfeld müssen ausgefüllt werden, damit das Programm / die Website die Gleichung lösen kann</li> 
<li>Klammern dürfen nicht benutzt werden</li>
</ul><p><img src="assets/images/help/web/4.PNG"></p>
<p>Mit dem Button „Los“ wird die Berechnung gestartet. Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird das vorher frei gelassene Feld mit dem berechneten Wert befüllt.</p>
<p>Einheiten spielen dabei für die Berechnung keine Rolle, da diese in der gleichen Einheit ausgegeben werden, wie sie eingegeben wurden. (Beispielsweise: 2 Stoffmengen werden, natürlich in mol, eingegeben und eine Masse in g. Da sich in der Berechnung mol1 mit mol2 kürzt, bleibt nur die Einheit der Masse, in diesem Fall g übrig.)</p>
<br>
<h2>Molare Masse</h2>
<p>Die molare Masse-Funktion des Programmes / der Website benutzt die molaren Massen der einzelnen Stoffe aus der Tabelle und addiert diese. Der Stoff mit der auszurechnenden molaren Masse wird in das Eingabefeld eingetragen/kopiert. Dabei gilt:</p>
<ul>
<li>Der Stoff muss als Summenformel angegeben werden</li>
<li>Tiefgestellte Zahlen müssen als „normale“ Zahlen geschrieben werden (sprich:    H<sub>2</sub>O → H2O)</li>
<li>Klammern dürfen nicht benutzt werden</li>

</ul><p><img src="assets/images/help/web/5.PNG"></p>
<p>Mit dem Button „Los“ wird die Berechnung der molaren Masse gestartet. Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird die molare Masse des Stoffes in g/mol ausgegeben und kann mit dem Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
<br>
<h2>Einheitenumrechnung</h2>

<p>Diese Funktion des Programmes / der Website ermöglicht es, Werte mit für Chemie wichtigen Einheiten in andere Einheiten umzurechnen. Bei dem obersten Auswahlfeld wird die Einheiten-Kategorie ausgewählt. In das Auswahlfeld rechts neben dem Eingabefeld, in das der umzurechnende Wert eingegeben wird, wird die Ausgangseinheit des Wertes ausgewählt. Im untersten Auswahlfeld wird die gewünschte Ausgabeeinheit ausgewählt.</p>
<p><img src="assets/images/help/web/7.PNG"></p>
<p>Sollte ein Fehler auftreten so, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird der umgerechnete Wert automatisch ohne das Drücken eines Buttons ausgegeben und kann mit dem Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
`,
    delHelp: `
    <h2>Reaktionsausgleicher</h2>
    Die Formel der auszugleichenden Reaktion wird in das Eingabefeld eingetragen bzw. kopiert.
    <br>
    <br>
    <img src="assets/images/help/del/1.PNG"> <br><br>
    Dabei gilt:
    <ul>
<li>Alle Stoffe (Edukte und Produkte) müssen als Summenformeln angegeben werden.</li>
<li>Tiefgestellte Zahlen müssen als „normale“ Zahlen geschrieben werden (sprich: H<sub>2</sub>O → H2O)</li>
<li>Der Reaktionspfeil, bzw. das Zeichen zur Abtrennung der Edukte und Produkte der Reaktion muss als einfaches = geschrieben werden (sprich: 2H2 + O2 = 2H2O)
<ul><li>Leerzeichen in der Gleichung sind irrelevant und werden von Programm / Website ignoriert</li></ul></li>
<li>Klammern dürfen in der Reaktionsgleichung nicht benutzt werden</li>
    </ul>
Wenn die Reaktionsgleichung mit den entsprechenden Bedingungen in das Eingabefeld eingetragen wurde, wird der Ausgleichungsprozess mit dem Button „Los“ bzw. der Enter-Taste gestartet. <br>
    
    <p><img src="assets/images/help/del/1.PNG"></p><p>Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben. </p>
<p>Sollte es keinen Fehler geben, wird die ausgeglichene Reaktionsgleichung ausgegeben und kann durch den Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
</br>
    <h2>Liste der Elemente</h2>
Diese Liste beinhaltet alle bereits bekannten Elemente (Stand: Juni 2020), deren Namen, Symbol und einige wichtige Werte. Dabei ist folgendes zu beachten:
  
<ul>
<li>Die Einheit der Dichte für die verschiedenen Elemente ist vom Aggregatzustand bei 20°C (letzte Spalte der Tabelle) abhängig
<ul><li>Die Dichte für die Stoffe mit dem Aggregatzustand „fest“ bei 20°C ist in der Einheit g/cm<sup>3</sup> angegeben</li>
<li>Die Dichte für die Stoffe mit dem Aggregatzustand „flüssig“ und „gasförmig“ bei 20°C ist in der Einheit g/l angegeben</li></ul></li>
<li>Bei Elementen mit hoher Ordnungszahl (etwa ab Ordnungszahl 95), welche teilweise aufgrund von Instabilität nur für Bruchteile von Sekunden in kleinsten Mengen im Labor erzeugt werden können, fehlen viele Werte, da diese nie ermittelt werden konnten
<ul><li>Die meisten vorhandenen Werte von Elementen mit hoher Ordnungszahl sind errechnete bzw. theoretisch angenommene Werte</li></ul></li>
<li>Werte wie die molare Masse aus der Tabelle werden auch in anderen Teilen der Webseite / des Programmes benutzt</li>


</ul>

<p>Die meisten Werte wurden, soweit vorhanden, aus der App / Webseite der Merck KGaA, Darmstadt, Deutschland entnommen. Weitere Werte wurden den Wikipedia-Einträgen der jeweiligen Elemente, bzw. der Website chemie.de entnommen.
</p>
<p>
Obwohl lange an der Genauigkeit der Werte in der Tabelle gearbeitet wurde, können trotzdem kleinere Ungenauigkeiten vorhanden sein. 
</p>
<p>
Fällt ihnen eine Ungenauigkeit oder ein falscher Wert auf, bitten wir sie, sich an die Adresse <a href="mailto:chemistryutility@gmail.com">chemistryutility@gmail.com</a> zu wenden, damit der Fehler behoben werden kann. Vielen Dank.
</p> </br>
<h2>Stöchiometrie</h2>
<p>Die Stöchiometrie auf der Website / im Programm erfolgt nach der Grundgleichung  M=m/n. Dabei gilt:</p>
<ul>
<li>In die Felder „Stoff 1“ und „Stoff 2“  müssen die Summenformeln der benutzten Stoffe eingetragen werden
<ul><li>Das Programm / die Website berechnet die molare Masse des Stoffes automatisch mit Werten aus der Tabelle</li></ul></li>
<li>Alle Felder, bis auf ein Masse-/Stoffmengenfeld müssen ausgefüllt werden, damit das Programm / die Website die Gleichung lösen kann</li> 
<li>Klammern dürfen nicht benutzt werden</li>
</ul><p><img src="assets/images/help/del/4.PNG"></p>
<p>Mit dem Button „Los“ wird die Berechnung gestartet. Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird das vorher frei gelassene Feld mit dem berechneten Wert befüllt.</p>
<p>Einheiten spielen dabei für die Berechnung keine Rolle, da diese in der gleichen Einheit ausgegeben werden, wie sie eingegeben wurden. (Beispielsweise: 2 Stoffmengen werden, natürlich in mol, eingegeben und eine Masse in g. Da sich in der Berechnung mol1 mit mol2 kürzt, bleibt nur die Einheit der Masse, in diesem Fall g übrig.)</p>
<br>
<h2>Molare Masse</h2>
<p>Die molare Masse-Funktion des Programmes / der Website benutzt die molaren Massen der einzelnen Stoffe aus der Tabelle und addiert diese. Der Stoff mit der auszurechnenden molaren Masse wird in das Eingabefeld eingetragen/kopiert. Dabei gilt:</p>
<ul>
<li>Der Stoff muss als Summenformel angegeben werden</li>
<li>Tiefgestellte Zahlen müssen als „normale“ Zahlen geschrieben werden (sprich:    H<sub>2</sub>O → H2O)</li>
<li>Klammern dürfen nicht benutzt werden</li>

</ul><p><img src="assets/images/help/del/5.PNG"></p>
<p>Mit dem Button „Los“ wird die Berechnung der molaren Masse gestartet. Sollte einer der obigen Hinweise nicht beachtet worden sein oder ein anderer Fehler tritt auf, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird die molare Masse des Stoffes in g/mol ausgegeben und kann mit dem Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
<br>
<h2>Einheitenumrechnung</h2>

<p>Diese Funktion des Programmes / der Website ermöglicht es, Werte mit für Chemie wichtigen Einheiten in andere Einheiten umzurechnen. Bei dem obersten Auswahlfeld wird die Einheiten-Kategorie ausgewählt. In das Auswahlfeld rechts neben dem Eingabefeld, in das der umzurechnende Wert eingegeben wird, wird die Ausgangseinheit des Wertes ausgewählt. Im untersten Auswahlfeld wird die gewünschte Ausgabeeinheit ausgewählt.</p>
<p><img src="assets/images/help/del/7.PNG"></p>
<p>Sollte ein Fehler auftreten so, wird das Programm / die Website eine hinweisende Fehlermeldung ausgeben.</p>
<p>Sollte es keinen Fehler geben, wird der umgerechnete Wert automatisch ohne das Drücken eines Buttons ausgegeben und kann mit dem Button „Kopieren“ in die Zwischenablage kopiert werden.</p>
`,
    privacyComplete: `<h1>Datenschutzerklärung</h1>
  <h2>Einleitung</h2>
  <p>
    Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären,
    welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als
    "Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang
    verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten
    Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung
    unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen
    Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer
    Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
    "Onlineangebot“).
  </p>
  <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
  <p>Stand: 17. Juni 2020</p>
  <h2>Inhaltsübersicht</h2>
  <ul class="index">
    <li><a class="index-link">Einleitung</a></li>
    <li><a class="index-link">Verantwortlicher</a></li>
    <li>
      <a class="index-link">Übersicht der Verarbeitungen</a>
    </li>
    <li>
      <a class="index-link">Kontakt Datenschutzbeauftragter</a>
    </li>
    <li><a class="index-link">Maßgebliche Rechtsgrundlagen</a></li>
    <li><a class="index-link">Sicherheitsmaßnahmen</a></li>
    <li>
      <a class="index-link"
        >Übermittlung und Offenbarung von personenbezogenen Daten</a
      >
    </li>
    <li>
      <a class="index-link">Datenverarbeitung in Drittländern</a>
    </li>
    <li><a class="index-link">Einsatz von Cookies</a></li>
    <li>
      <a class="index-link"
        >Bereitstellung des Onlineangebotes und Webhosting</a
      >
    </li>
    <li><a class="index-link">Kontaktaufnahme</a></li>
    <li>
      <a class="index-link">Präsenzen in sozialen Netzwerken (Social Media)</a>
    </li>
    <li>
      <a class="index-link"
        >Plugins und eingebettete Funktionen sowie Inhalte</a
      >
    </li>
    <li><a class="index-link">Löschung von Daten</a></li>
    <li>
      <a class="index-link"
        >Änderung und Aktualisierung der Datenschutzerklärung</a
      >
    </li>
    <li>
      <a class="index-link">Rechte der betroffenen Personen</a>
    </li>
    <li><a class="index-link">Begriffsdefinitionen</a></li>
  </ul>
  <h2 id="m3">Verantwortlicher</h2>
  <p>Felix Neumann<br />Ziegeleiweg 3<br />04158 Leipzig</p>
  <p>
    <strong>E-Mail-Adresse:</strong>
    <a href="mailto:felix23.fn@gmail.com">felix23.fn@gmail.com</a>
  </p>
  <h2 id="m11">Kontakt Datenschutzbeauftragter</h2>
  <p>Felix Neumann<br />Ziegeleiweg 3<br />04158 Leipzig</p>
  <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
  <p>
    Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die
    Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
    Personen.
  </p>
  <h3>Arten der verarbeiteten Daten</h3>
  <ul>
    <li>Bestandsdaten (z.B. Namen, Adressen).</li>
    <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos).</li>
    <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
    <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).</li>
    <li>
      Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
      Zugriffszeiten).
    </li>
  </ul>
  <h3>Kategorien betroffener Personen</h3>
  <ul>
    <li>Kommunikationspartner.</li>
    <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
  </ul>
  <h3>Zwecke der Verarbeitung</h3>
  <ul>
    <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
    <li>Kontaktanfragen und Kommunikation.</li>
    <li>Remarketing.</li>
    <li>
      Tracking (z.B. interessens-/verhaltensbezogenes Profiling, Nutzung von
      Cookies).
    </li>
    <li>Vertragliche Leistungen und Service.</li>
  </ul>
  <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
  <p>
    Im Folgenden teilen wir die Rechtsgrundlagen der Datenschutzgrundverordnung
    (DSGVO), auf deren Basis wir die personenbezogenen Daten verarbeiten, mit.
    Bitte beachten Sie, dass zusätzlich zu den Regelungen der DSGVO die
    nationalen Datenschutzvorgaben in Ihrem bzw. unserem Wohn- und Sitzland
    gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
    maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
  </p>
  <ul>
    <li>
      <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die
      betroffene Person hat ihre Einwilligung in die Verarbeitung der sie
      betreffenden personenbezogenen Daten für einen spezifischen Zweck oder
      mehrere bestimmte Zwecke gegeben.
    </li>
    <li>
      <strong
        >Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit.
        b. DSGVO)</strong
      >
      - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
      Vertragspartei die betroffene Person ist, oder zur Durchführung
      vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen
      Person erfolgen.
    </li>
    <li>
      <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)</strong>
      - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
      Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
      Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person,
      die den Schutz personenbezogener Daten erfordern, überwiegen.
    </li>
  </ul>
  <p>
    <strong>Nationale Datenschutzregelungen in Deutschland</strong>: Zusätzlich
    zu den Datenschutzregelungen der Datenschutz-Grundverordnung gelten
    nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört
    insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten
    bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
    insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
    Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
    personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
    Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
    einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung für
    Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
    auf die Begründung, Durchführung oder Beendigung von
    Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten. Ferner
    können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung
    gelangen.
  </p>
  <h2 id="m27">Sicherheitsmaßnahmen</h2>
  <p>
    Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung
    des Stands der Technik, der Implementierungskosten und der Art, des Umfangs,
    der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen
    Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und
    Freiheiten natürlicher Personen geeignete technische und organisatorische
    Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
  </p>
  <p>
    Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
    Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und
    elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs,
    der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer
    Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine
    Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen
    auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den
    Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von
    Hardware, Software sowie Verfahren entsprechend dem Prinzip des
    Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche
    Voreinstellungen.
  </p>
  <h2 id="m25">Übermittlung und Offenbarung von personenbezogenen Daten</h2>
  <p>
    Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor,
    dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige
    Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber
    offengelegt werden. Zu den Empfängern dieser Daten können z.B.
    Zahlungsinstitute im Rahmen von Zahlungsvorgängen, mit IT-Aufgaben
    beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in
    eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die
    gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw.
    Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer
    Daten ab.
  </p>
  <h2 id="m24">Datenverarbeitung in Drittländern</h2>
  <p>
    Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union
    (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die
    Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der
    Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder
    Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen
    Vorgaben.
  </p>
  <p>
    Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich oder gesetzlich
    erforderlicher Übermittlung verarbeiten oder lassen wir die Daten nur in
    Drittländern mit einem anerkannten Datenschutzniveau, zu denen die unter dem
    "Privacy-Shield" zertifizierten US-Verarbeiter gehören, oder auf Grundlage
    besonderer Garantien, wie z.B. vertraglicher Verpflichtung durch sogenannte
    Standardschutzklauseln der EU-Kommission, des Vorliegens von
    Zertifizierungen oder verbindlicher interner Datenschutzvorschriften,
    verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission:
    <a
      href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
      target="_blank"
      >https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de</a
    >
    ).
  </p>
  <h2 id="m134">Einsatz von Cookies</h2>
  <p>
    Cookies sind Textdateien, die Daten von besuchten Websites oder Domains
    enthalten und von einem Browser auf dem Computer des Benutzers gespeichert
    werden. Ein Cookie dient in erster Linie dazu, die Informationen über einen
    Benutzer während oder nach seinem Besuch innerhalb eines Onlineangebotes zu
    speichern. Zu den gespeicherten Angaben können z.B. die Spracheinstellungen
    auf einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der
    ein Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen wir
    ferner andere Technologien, die die gleichen Funktionen wie Cookies erfüllen
    (z.B., wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen
    gespeichert werden, auch als "Nutzer-IDs" bezeichnet)
  </p>
  <p>
    <strong
      >Die folgenden Cookie-Typen und Funktionen werden unterschieden:</strong
    >
  </p>
  <ul>
    <li>
      <strong>Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):</strong>
      Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
      Online-Angebot verlassen und seinen Browser geschlossen hat.
    </li>
    <li>
      <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach
      dem Schließen des Browsers gespeichert. So kann beispielsweise der
      Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt werden,
      wenn der Nutzer eine Website erneut besucht. Ebenso können die Interessen
      von Nutzern, die zur Reichweitenmessung oder zu Marketingzwecken verwendet
      werden, in einem solchen Cookie gespeichert werden.
    </li>
    <li>
      <strong>First-Party-Cookies:</strong> First-Party-Cookies werden von uns
      selbst gesetzt.
    </li>
    <li>
      <strong>Third-Party-Cookies (auch: Drittanbieter-Cookies)</strong>:
      Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden (sog.
      Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
    </li>
    <li>
      <strong
        >Notwendige (auch: essentielle oder unbedingt erforderliche)
        Cookies:</strong
      >
      Cookies können zum einen für den Betrieb einer Webseite unbedingt
      erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu speichern
      oder aus Gründen der Sicherheit).
    </li>
    <li>
      <strong>Statistik-, Marketing- und Personalisierungs-Cookies</strong>:
      Ferner werden Cookies im Regelfall auch im Rahmen der Reichweitenmessung
      eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein
      Verhalten (z.B. Betrachten bestimmter Inhalte, Nutzen von Funktionen etc.)
      auf einzelnen Webseiten in einem Nutzerprofil gespeichert werden. Solche
      Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren
      potentiellen Interessen entsprechen. Dieses Verfahren wird auch als
      "Tracking", d.h., Nachverfolgung der potentiellen Interessen der Nutzer
      bezeichnet. . Soweit wir Cookies oder "Tracking"-Technologien einsetzen,
      informieren wir Sie gesondert in unserer Datenschutzerklärung oder im
      Rahmen der Einholung einer Einwilligung.
    </li>
  </ul>
  <p>
    <strong>Hinweise zu Rechtsgrundlagen: </strong> Auf welcher Rechtsgrundlage
    wir Ihre personenbezogenen Daten mit Hilfe von Cookies verarbeiten, hängt
    davon ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und
    Sie in die Nutzung von Cookies einwilligen, ist die Rechtsgrundlage der
    Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls werden die
    mithilfe von Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
    Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres
    Onlineangebotes und dessen Verbesserung) verarbeitet oder, wenn der Einsatz
    von Cookies erforderlich ist, um unsere vertraglichen Verpflichtungen zu
    erfüllen.
  </p>
  <p>
    <strong>Speicherdauer: </strong>Sofern wir Ihnen keine expliziten Angaben
    zur Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines
    sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die Speicherdauer bis
    zu zwei Jahre betragen kann.
  </p>
  <p>
    <strong
      >Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out):
    </strong>
    Abhängig davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder
    gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine
    erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch
    Cookie-Technologien zu widersprechen (zusammenfassend als "Opt-Out"
    bezeichnet). Sie können Ihren Widerspruch zunächst mittels der Einstellungen
    Ihres Browsers erklären, z.B., indem Sie die Nutzung von Cookies
    deaktivieren (wobei hierdurch auch die Funktionsfähigkeit unseres
    Onlineangebotes eingeschränkt werden kann). Ein Widerspruch gegen den
    Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch mittels einer
    Vielzahl von Diensten, vor allem im Fall des Trackings, über die Webseiten
    <a href="https://optout.aboutads.info" target="_blank"
      >https://optout.aboutads.info</a
    >
    und
    <a href="https://www.youronlinechoices.com/" target="_blank"
      >https://www.youronlinechoices.com/</a
    >
    erklärt werden. Daneben können Sie weitere Widerspruchshinweise im Rahmen
    der Angaben zu den eingesetzten Dienstleistern und Cookies erhalten.
  </p>
  <p>
    <strong
      >Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung</strong
    >: Bevor wir Daten im Rahmen der Nutzung von Cookies verarbeiten oder
    verarbeiten lassen, bitten wir die Nutzer um eine jederzeit widerrufbare
    Einwilligung. Bevor die Einwilligung nicht ausgesprochen wurde, werden
    allenfalls Cookies eingesetzt, die für den Betrieb unseres Onlineangebotes
    unbedingt erforderlich sind.
  </p>
  <ul class="m-elements">
    <li>
      <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
      Webseiten, Interesse an Inhalten, Zugriffszeiten),
      Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
    </li>
    <li>
      <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
      Nutzer von Onlinediensten).
    </li>
    <li>
      <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a
      DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
    </li>
  </ul>
  <h2 id="m225">Bereitstellung des Onlineangebotes und Webhosting</h2>
  <p>
    Um unser Onlineangebot sicher und effizient bereitstellen zu können, nehmen
    wir die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch,
    von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot
    abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und
    Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
    Datenbankdienste sowie Sicherheitsleistungen und technische
    Wartungsleistungen in Anspruch nehmen.
  </p>
  <p>
    Zu den im Rahmen der Bereitstellung des Hostingangebotes verarbeiteten Daten
    können alle die Nutzer unseres Onlineangebotes betreffenden Angaben gehören,
    die im Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören
    regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von
    Onlineangeboten an Browser ausliefern zu können, und alle innerhalb unseres
    Onlineangebotes oder von Webseiten getätigten Eingaben.
  </p>
  <p>
    <strong>Erhebung von Zugriffsdaten und Logfiles</strong>: Wir selbst (bzw.
    unser Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server
    (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse und
    Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs,
    übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst
    Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte
    Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören.
  </p>
  <p>
    Die Serverlogfiles können zum einen zu Zwecken der Sicherheit eingesetzt
    werden, z.B., um eine Überlastung der Server zu vermeiden (insbesondere im
    Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken) und zum
    anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen.
  </p>
  <ul class="m-elements">
    <li>
      <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B. Texteingaben,
      Fotografien, Videos), Nutzungsdaten (z.B. besuchte Webseiten, Interesse an
      Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
      Geräte-Informationen, IP-Adressen).
    </li>
    <li>
      <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
      Nutzer von Onlinediensten).
    </li>
    <li>
      <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
      S. 1 lit. f. DSGVO).
    </li>
  </ul>
  <h2 id="m182">Kontaktaufnahme</h2>
  <p>
    Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon
    oder via soziale Medien) werden die Angaben der anfragenden Personen
    verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger
    angefragter Maßnahmen erforderlich ist.
  </p>
  <p>
    Die Beantwortung der Kontaktanfragen im Rahmen von vertraglichen oder
    vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer vertraglichen
    Pflichten oder zur Beantwortung von (vor)vertraglichen Anfragen und im
    Übrigen auf Grundlage der berechtigten Interessen an der Beantwortung der
    Anfragen.
  </p>
  <ul class="m-elements">
    <li>
      <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
      Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B.
      Texteingaben, Fotografien, Videos).
    </li>
    <li><strong>Betroffene Personen:</strong> Kommunikationspartner.</li>
    <li>
      <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
      Kommunikation.
    </li>
    <li>
      <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche
      Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO), Berechtigte Interessen (Art.
      6 Abs. 1 S. 1 lit. f. DSGVO).
    </li>
  </ul>
  <h2 id="m136">Präsenzen in sozialen Netzwerken (Social Media)</h2>
  <p>
    Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten
    in diesem Rahmen Daten der Nutzer, um mit den dort aktiven Nutzern zu
    kommunizieren oder um Informationen über uns anzubieten.
  </p>
  <p>
    Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der
    Europäischen Union verarbeitet werden können. Hierdurch können sich für die
    Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer
    erschwert werden könnte. Im Hinblick auf US-Anbieter, die unter dem
    Privacy-Shield zertifiziert sind oder vergleichbare Garantien eines sicheren
    Datenschutzniveaus bieten, weisen wir darauf hin, dass sie sich damit
    verpflichten, die Datenschutzstandards der EU einzuhalten.
  </p>
  <p>
    Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall
    für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. anhand des
    Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer
    Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum
    verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der
    Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen.
    Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer
    gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer
    gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten
    unabhängig der von den Nutzern verwendeten Geräte gespeichert werden
    (insbesondere, wenn die Nutzer Mitglieder der jeweiligen Plattformen sind
    und bei diesen eingeloggt sind).
  </p>
  <p>
    Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
    Widerspruchsmöglichkeiten (Opt-Out) verweisen wir auf die
    Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.
  </p>
  <p>
    Auch im Fall von Auskunftsanfragen und der Geltendmachung von
    Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den
    Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils
    Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen
    ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann
    können Sie sich an uns wenden.
  </p>
  <ul class="m-elements">
    <li>
      <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B. Namen,
      Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B.
      Texteingaben, Fotografien, Videos), Nutzungsdaten (z.B. besuchte
      Webseiten, Interesse an Inhalten, Zugriffszeiten),
      Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
    </li>
    <li>
      <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
      Nutzer von Onlinediensten).
    </li>
    <li>
      <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
      Kommunikation, Tracking (z.B. interessens-/verhaltensbezogenes Profiling,
      Nutzung von Cookies), Remarketing.
    </li>
    <li>
      <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
      S. 1 lit. f. DSGVO).
    </li>
  </ul>
  <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
  <ul class="m-elements">
    <li>
      <strong>Instagram :</strong> Soziales Netzwerk; Dienstanbieter: Instagram
      Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA; Website:
      <a href="https://www.instagram.com" target="_blank"
        >https://www.instagram.com</a
      >; Datenschutzerklärung:
      <a href="https://instagram.com/about/legal/privacy" target="_blank"
        >https://instagram.com/about/legal/privacy</a
      >.
    </li>
    <li>
      <strong>Twitter:</strong> Soziales Netzwerk; Dienstanbieter: Twitter Inc.,
      1355 Market Street, Suite 900, San Francisco, CA 94103, USA;
      Datenschutzerklärung:
      <a href="https://twitter.com/de/privacy" target="_blank"
        >https://twitter.com/de/privacy</a
      >, (Einstellungen)
      <a href="https://twitter.com/personalization" target="_blank"
        >https://twitter.com/personalization</a
      >; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von
      Daten in den USA):
      <a
        href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
        target="_blank"
        >https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active</a
      >.
    </li>
  </ul>
  <h2 id="m328">Plugins und eingebettete Funktionen sowie Inhalte</h2>
  <p>
    Wir binden in unser Onlineangebot Funktions- und Inhaltselemente ein, die
    von den Servern ihrer jeweiligen Anbieter (nachfolgend bezeichnet als
    "Drittanbieter”) bezogen werden. Dabei kann es sich zum Beispiel um
    Grafiken, Videos oder Social-Media-Schaltflächen sowie Beiträge handeln
    (nachfolgend einheitlich bezeichnet als "Inhalte”).
  </p>
  <p>
    Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die
    IP-Adresse der Nutzer verarbeiten, da sie ohne die IP-Adresse die Inhalte
    nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die
    Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns,
    nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse
    lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können
    ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als "Web Beacons"
    bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die
    "Pixel-Tags" können Informationen, wie der Besucherverkehr auf den Seiten
    dieser Webseite, ausgewertet werden. Die pseudonymen Informationen können
    ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter
    anderem technische Informationen zum Browser und zum Betriebssystem, zu
    verweisenden Webseiten, zur Besuchszeit sowie weitere Angaben zur Nutzung
    unseres Onlineangebotes enthalten als auch mit solchen Informationen aus
    anderen Quellen verbunden werden.
  </p>
  <p>
    <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die Nutzer um
    deren Einwilligung in den Einsatz der Drittanbieter bitten, ist die
    Rechtsgrundlage der Verarbeitung von Daten die Einwilligung. Ansonsten
    werden die Daten der Nutzer auf Grundlage unserer berechtigten Interessen
    (d.h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen
    Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die
    Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung
    hinweisen.
  </p>
  <ul class="m-elements">
    <li>
      <strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z.B. besuchte
      Webseiten, Interesse an Inhalten, Zugriffszeiten),
      Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
    </li>
    <li>
      <strong>Betroffene Personen:</strong> Nutzer (z.B. Webseitenbesucher,
      Nutzer von Onlinediensten).
    </li>
    <li>
      <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
      Onlineangebotes und Nutzerfreundlichkeit, Vertragliche Leistungen und
      Service.
    </li>
    <li>
      <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1
      S. 1 lit. f. DSGVO).
    </li>
  </ul>
  <p><strong>Eingesetzte Dienste und Diensteanbieter:</strong></p>
  <ul class="m-elements">
    <li>
      <strong>Google Fonts:</strong> Wir binden die Schriftarten ("Google
      Fonts") des Anbieters Google ein, wobei die Daten der Nutzer allein zu
      Zwecken der Darstellung der Schriftarten im Browser der Nutzer verwendet
      werden. Die Einbindung erfolgt auf Grundlage unserer berechtigten
      Interessen an einer technisch sicheren, wartungsfreien und effizienten
      Nutzung von Schriftarten, deren einheitlicher Darstellung sowie unter
      Berücksichtigung möglicher lizenzrechtlicher Restriktionen für deren
      Einbindung. Dienstanbieter: Google Ireland Limited, Gordon House, Barrow
      Street, Dublin 4, Irland, Mutterunternehmen: Google LLC, 1600 Amphitheatre
      Parkway, Mountain View, CA 94043, USA; Website:
      <a href="https://fonts.google.com/" target="_blank"
        >https://fonts.google.com/</a
      >; Datenschutzerklärung:
      <a href="https://policies.google.com/privacy" target="_blank"
        >https://policies.google.com/privacy</a
      >; Privacy Shield (Gewährleistung Datenschutzniveau bei Verarbeitung von
      Daten in den USA):
      <a
        href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
        target="_blank"
        >https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a
      >.
    </li>
  </ul>
  <h2 id="m12">Löschung von Daten</h2>
  <p>
    Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen
    Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen
    widerrufen werden oder sonstige Erlaubnisse entfallen (z.B., wenn der Zweck
    der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht
    erforderlich sind).
  </p>
  <p>
    Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich
    zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke
    beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke
    verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
    steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung
    zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
    Schutz der Rechte einer anderen natürlichen oder juristischen Person
    erforderlich ist.
  </p>
  <p>
    Weitere Hinweise zu der Löschung von personenbezogenen Daten können ferner
    im Rahmen der einzelnen Datenschutzhinweise dieser Datenschutzerklärung
    erfolgen.
  </p>
  <h2 id="m15">Änderung und Aktualisierung der Datenschutzerklärung</h2>
  <p>
    Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung
    zu informieren. Wir passen die Datenschutzerklärung an, sobald die
    Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich
    machen. Wir informieren Sie, sobald durch die Änderungen eine
    Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige
    individuelle Benachrichtigung erforderlich wird.
  </p>
  <p>
    Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen
    von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die
    Adressen sich über die Zeit ändern können und bitten die Angaben vor
    Kontaktaufnahme zu prüfen.
  </p>
  <h2 id="m10">Rechte der betroffenen Personen</h2>
  <p>
    Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich
    insbesondere aus Art. 15 bis 21 DSGVO ergeben:
  </p>
  <ul>
    <li>
      <strong
        >Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer
        besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie
        betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1
        lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für
        ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie
        betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu
        betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
        Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke
        derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit
        es mit solcher Direktwerbung in Verbindung steht.</strong
      >
    </li>
    <li>
      <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht,
      erteilte Einwilligungen jederzeit zu widerrufen.
    </li>
    <li>
      <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung
      darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
      Auskunft über diese Daten sowie auf weitere Informationen und Kopie der
      Daten entsprechend den gesetzlichen Vorgaben.
    </li>
    <li>
      <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den
      gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie
      betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen
      Daten zu verlangen.
    </li>
    <li>
      <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong>
      Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen,
      dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ
      nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung
      der Daten zu verlangen.
    </li>
    <li>
      <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie
      betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
      gesetzlichen Vorgaben in einem strukturierten, gängigen und
      maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
      anderen Verantwortlichen zu fordern.
    </li>
    <li>
      <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben ferner nach
      Maßgabe der gesetzlichen Vorgaben das Recht, bei einer Aufsichtsbehörde,
      insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts,
      Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes Beschwerde
      einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
      betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
    </li>
  </ul>
  <h2 id="m42">Begriffsdefinitionen</h2>
  <p>
    In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
    Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der Begriffe sind
    dem Gesetz entnommen und vor allem im Art. 4 DSGVO definiert. Die
    gesetzlichen Definitionen sind verbindlich. Die nachfolgenden Erläuterungen
    sollen dagegen vor allem dem Verständnis dienen. Die Begriffe sind
    alphabetisch sortiert.
  </p>
  <ul class="glossary">
    <li>
      <strong>Personenbezogene Daten:</strong> "Personenbezogene Daten“ sind
      alle Informationen, die sich auf eine identifizierte oder identifizierbare
      natürliche Person (im Folgenden "betroffene Person“) beziehen; als
      identifizierbar wird eine natürliche Person angesehen, die direkt oder
      indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
      zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B.
      Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert
      werden kann, die Ausdruck der physischen, physiologischen, genetischen,
      psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
      natürlichen Person sind.
    </li>
    <li>
      <strong>Remarketing:</strong> Vom "Remarketing“ bzw. "Retargeting“ spricht
      man, wenn z.B. zu Werbezwecken vermerkt wird, für welche Produkte sich ein
      Nutzer auf einer Webseite interessiert hat, um den Nutzer auf anderen
      Webseiten an diese Produkte, z.B. in Werbeanzeigen, zu erinnern.
    </li>
    <li>
      <strong>Tracking:</strong> Vom "Tracking“ spricht man, wenn das Verhalten
      von Nutzern über mehrere Onlineangebote hinweg nachvollzogen werden kann.
      Im Regelfall werden im Hinblick auf die genutzten Onlineangebote
      Verhaltens- und Interessensinformationen in Cookies oder auf Servern der
      Anbieter der Trackingtechnologien gespeichert (sogenanntes Profiling).
      Diese Informationen können anschließend z.B. eingesetzt werden, um den
      Nutzern Werbeanzeigen anzuzeigen, die voraussichtlich deren Interessen
      entsprechen.
    </li>
    <li>
      <strong>Verantwortlicher:</strong> Als "Verantwortlicher“ wird die
      natürliche oder juristische Person, Behörde, Einrichtung oder andere
      Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel
      der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
    </li>
    <li>
      <strong>Verarbeitung:</strong> "Verarbeitung" ist jeder mit oder ohne
      Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche
      Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
      reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das
      Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
    </li>
  </ul>`,
    impressComplete: `<h1>Impressum</h1>
<h2 id="m46">Diensteanbieter</h2>
<p>Felix Neumann</p>
<p>Ziegeleiweg 3</p>
<p>04158 Leipzig</p>
<p>Deutschland</p>
<h2 id="m56">Kontaktmöglichkeiten</h2><p><strong>E-Mail-Adresse:</strong> <a href="mailto:felix23.fn@gmail.com">felix23.fn@gmail.com</a></p>
<h2 id="m172">Social Media und andere Onlinepräsenzen</h2><p><strong>Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und Onlineprofile:</strong> </p>
<p><a href="https://www.facebook.com/chem.util.9" target="_blank">https://www.facebook.com/chem.util.9</a></p>
<p><a href="https://twitter.com/ChemistryUtil" target="_blank">https://twitter.com/ChemistryUtil</a></p>
<p><a href="https://instagram.com/chemistryutility" target="_blank">https://instagram.com/chemistryutility</a></p>
`,
  },
  en: {
    infoTop: "This project was realized by Felix Neumann and Emil Hausmann.",
    settings: "Settings",
    language: "Language",
    chemistryUtil: "Chemistry Utility",
    cookieMessage: "This website uses cookies to optimize the user experience.",
    elementList: "List of elements",
    atomicNumber: "atomic number",
    symbol: "symbol",
    name: "name",
    molarMass: "molar mass (g/mol)",
    electronegativity: "electronegativity (Pauling)",
    nucleonNumber: "nucleon number",
    density: "density (g/cm^3 resp. g/l)",
    meltingPoint: "melting point (°C)",
    boilingPoint: "boiling point (°C)",
    state: "state (20°C)",
    gas: "gas",
    liquid: "liquid",
    solid: "solid",
    formulaBalancer: "Formula balancer",
    stoichiometry: "Stoichiometry",
    molarMassTitle: "Molar mass",
    formulaBalancerHint1:
      "Subscript numbers are to be written as normal numbers. (e.g. H2O)",
    formulaBalancerHint2: "Only sum formulas are permitted.",
    formulaBalancerHint3: "A simple = is to be used as a reaction arrow.",
    formulaBalancerHint4: "Parentheses are not allowed.",
    go: "Go",
    enterFormulaHere: "Enter formula here",
    stoichiometryHint1:
      "Both substance fields must be filled in with sum formulas. Either a mass or a substance quantity field must be left blank.",
    stoichiometryHint2: "Parentheses are not allowed.",
    substance1: "Substance 1",
    substance2: "Substance 2",
    mass1: "Mass 1",
    mass2: "Mass 2",
    amount1: "Substance quantity 1",
    amount2: "Substance quantity 2",
    molarMassHint1: "Enter a molecule as a sum formula.",
    molarMassHint2: "Parentheses are not allowed.",
    enterMoleculeHere: "Enter molecule here",
    theme: "Theme",
    credits: "Credits",
    dark: "Dark",
    light: "Light",
    bisque: "Bisque",
    black: "Black",
    blue: "Blue",
    green: "Green",
    red: "Red",
    designConcept: "Design Concept",
    font: "Font",
    space: "Space",
    particles: "Particles",
    unitsTitle: "Unit converter",
    help: "Help",
    websiteHelp: "Website-Help",
    delphiHelp: "Delphi-Help",
    privandimp: "Privacy and Imprint",
    privacy: "Privacy",
    impress: "Imprint",
    copy: "Copy",
    webHelp: `
    <h2>Reaction Balancer</h2>The formula of the reaction to be balanced is entered or copied into the input field.
    <br>
    <br>
    <img src="assets/images/help/web/2.PNG"> <br><br>
    The following applies:
    <ul>
<li>all substances (educts and products) must be given as total formulas.</li>
<li>subscript numbers must be written as "normal" numbers (i.e.: H<sub>2</sub>O → H2O)</li>
<li>The reaction arrow or the sign for the separation of the reactants and products of the reaction must be written as simple = (i.e.: 2H2 + O2 = 2H2O)
<ul><li>o	Spaces in the equation are irrelevant and are ignored by the program / website</li></ul></li>
<li>Brackets must not be used in the reaction equation</li>
    </ul>
When the reaction equation with the corresponding conditions has been entered into the input field, the balancing process is started with the "Go" button or the Enter key. <br>
    
    <p><img src="assets/images/help/web/2.PNG"></p><p>If one of the above instructions has not been followed or another error occurs, the program / website will issue a warning error message. </p>
<p>If there is no error, the balanced reaction equation is output and can be copied to the clipboard by clicking the "Copy" button.</p>
</br>
    <h2>List of elements</h2>
This list contains all elements already known (as of June 2020), their names, symbols and some important values. The following must be observed:
  
<ul>
<li>The unit of density for the different elements depends on the state of aggregation at 20°C (last column of the table)
<ul><li>The density for substances with the aggregate state "solid" at 20°C is given in the unit g/cm<sup>3</sup></li>
<li>The density for the substances with the aggregate state "liquid" and "gaseous" at 20°C is given in the unit g/l</li></ul></li>
<li>For elements with high atomic numbers (from atomic number 95 upwards), which due to instability can only be produced in the laboratory for fractions of seconds in very small quantities, many values are missing, because they could never be determined
<ul><li>Most existing values of elements with high atomic numbers are calculated or theoretically assumed values</li></ul></li>
<li>Values like the molar mass from the table are also used in other parts of the website / program</li>


</ul>

<p>Most values, if available, were taken from the app / website of Merck KGaA, Darmstadt, Germany. Further values were taken from the Wikipedia articles of the respective elements or from the website chemie.de.
</p>
<p>
Although a long time has been spent on the accuracy of the values in the table, minor inaccuracies may still exist. 
</p>
<p>
If you notice an inaccuracy or an incorrect value, please contact <a href="mailto:chemistryutility@gmail.com">chemistryutility@gmail.com</a> so that the error can be corrected. Thank you very much.
</p> </br>
<h2>Stoichiometry</h2>
<p>The stoichiometry on the website / in the program is based on the basic equation  M=m/n The following applies:</p>
<ul>
<li>In the fields "Substance 1" and "Substance 2" the sum formulas of the substances used must be entered
<ul><li>The program / website automatically calculates the molar mass of the substance using values from the table</li></ul></li>
<li>All fields, except for one mass/substance quantity field, must be filled in so that the program / website can solve the equation</li> 
<li>Brackets must not be used</li>
</ul><p><img src="assets/images/help/web/3.PNG"></p>
<p>The calculation is started with the "Go" button. If one of the above instructions has not been observed or another error occurs, the program / website will issue a warning error message.</p>
<p>If there is no error, the previously left blank field is filled with the calculated value.</p>
<p>Units do not play a role in the calculation because they are put out in the same unit as they were entered. (For example: 2 quantities of substance are entered, naturally in mol, and a mass in g. As mol1 is shortened with mol2 in the calculation, only the unit of mass, in this case g, remains).</p>
<br>
<h2>Molar mass</h2>
<p>The molar mass function of the program / website uses the molar masses of the individual substances from the table and adds them up. The substance with the molar mass to be calculated is entered/copied into the input field. The following applies:</p>
<ul>
<li>The substance must be specified as a molecular formula</li>
<li>Subscript numbers must be written as "normal" numbers (i.e.: H<sub>2</sub>O → H2O)</li>
<li>Brackets must not be used</li>

</ul><p><img src="assets/images/help/web/6.PNG"></p>
<p>With the button "Go" the calculation of the molar mass is started. If one of the above instructions has not been observed or another error occurs, the program / website will issue a warning error message.</p>
<p>If there is no error, the molar mass of the substance is output in g/mol and can be copied to the clipboard by clicking the "Copy" button.</p>
<br>
<h2>Unit Conversion</h2>
<p>This function of the program / website allows to convert values with units important for chemistry into other units. In the topmost selection field, the unit category is selected. In the selection field to the right of the input field in which the value to be converted is entered, the output unit of the value is selected. The desired output unit is selected in the bottom selection field.</p>
<p><img src="assets/images/help/web/8.PNG"></p>
<p>If an error occurs, the program / website will display a warning error message.</p>
<p>If there is no error, the converted value is automatically output without pressing a button and can be copied to the clipboard by pressing the "Copy" button.</p>
`,
    delHelp: `
    <h2>Reaction Balancer</h2>The formula of the reaction to be balanced is entered or copied into the input field.
    <br>
    <br>
    <img src="assets/images/help/del/1.PNG"> <br><br>
    The following applies:
    <ul>
<li>all substances (educts and products) must be given as total formulas.</li>
<li>subscript numbers must be written as "normal" numbers (i.e.: H<sub>2</sub>O → H2O)</li>
<li>The reaction arrow or the sign for the separation of the reactants and products of the reaction must be written as simple = (i.e.: 2H2 + O2 = 2H2O)
<ul><li>o	Spaces in the equation are irrelevant and are ignored by the program / website</li></ul></li>
<li>Brackets must not be used in the reaction equation</li>
    </ul>
When the reaction equation with the corresponding conditions has been entered into the input field, the balancing process is started with the "Go" button or the Enter key. <br>
    
    <p><img src="assets/images/help/del/1.PNG"></p><p>If one of the above instructions has not been followed or another error occurs, the program / website will issue a warning error message. </p>
<p>If there is no error, the balanced reaction equation is output and can be copied to the clipboard by clicking the "Copy" button.</p>
</br>
    <h2>List of elements</h2>
This list contains all elements already known (as of June 2020), their names, symbols and some important values. The following must be observed:
  
<ul>
<li>The unit of density for the different elements depends on the state of aggregation at 20°C (last column of the table)
<ul><li>The density for substances with the aggregate state "solid" at 20°C is given in the unit g/cm<sup>3</sup></li>
<li>The density for the substances with the aggregate state "liquid" and "gaseous" at 20°C is given in the unit g/l</li></ul></li>
<li>For elements with high atomic numbers (from atomic number 95 upwards), which due to instability can only be produced in the laboratory for fractions of seconds in very small quantities, many values are missing, because they could never be determined
<ul><li>Most existing values of elements with high atomic numbers are calculated or theoretically assumed values</li></ul></li>
<li>Values like the molar mass from the table are also used in other parts of the website / program</li>


</ul>

<p>Most values, if available, were taken from the app / website of Merck KGaA, Darmstadt, Germany. Further values were taken from the Wikipedia articles of the respective elements or from the website chemie.de.
</p>
<p>
Although a long time has been spent on the accuracy of the values in the table, minor inaccuracies may still exist. 
</p>
<p>
If you notice an inaccuracy or an incorrect value, please contact <a href="mailto:chemistryutility@gmail.com">chemistryutility@gmail.com</a> so that the error can be corrected. Thank you very much.
</p> </br>
<h2>Stoichiometry</h2>
<p>The stoichiometry on the website / in the program is based on the basic equation  M=m/n The following applies:</p>
<ul>
<li>In the fields "Substance 1" and "Substance 2" the sum formulas of the substances used must be entered
<ul><li>The program / website automatically calculates the molar mass of the substance using values from the table</li></ul></li>
<li>All fields, except for one mass/substance quantity field, must be filled in so that the program / website can solve the equation</li> 
<li>Brackets must not be used</li>
</ul><p><img src="assets/images/help/del/4.PNG"></p>
<p>The calculation is started with the "Go" button. If one of the above instructions has not been observed or another error occurs, the program / website will issue a warning error message.</p>
<p>If there is no error, the previously left blank field is filled with the calculated value.</p>
<p>Units do not play a role in the calculation because they are put out in the same unit as they were entered. (For example: 2 quantities of substance are entered, naturally in mol, and a mass in g. As mol1 is shortened with mol2 in the calculation, only the unit of mass, in this case g, remains).</p>
<br>
<h2>Molar mass</h2>
<p>The molar mass function of the program / website uses the molar masses of the individual substances from the table and adds them up. The substance with the molar mass to be calculated is entered/copied into the input field. The following applies:</p>
<ul>
<li>The substance must be specified as a molecular formula</li>
<li>Subscript numbers must be written as "normal" numbers (i.e.: H<sub>2</sub>O → H2O)</li>
<li>Brackets must not be used</li>

</ul><p><img src="assets/images/help/del/5.PNG"></p>
<p>With the button "Go" the calculation of the molar mass is started. If one of the above instructions has not been observed or another error occurs, the program / website will issue a warning error message.</p>
<p>If there is no error, the molar mass of the substance is output in g/mol and can be copied to the clipboard by clicking the "Copy" button.</p>
<br>
<h2>Unit Conversion</h2>
<p>This function of the program / website allows to convert values with units important for chemistry into other units. In the topmost selection field, the unit category is selected. In the selection field to the right of the input field in which the value to be converted is entered, the output unit of the value is selected. The desired output unit is selected in the bottom selection field.</p>
<p><img src="assets/images/help/del/7.PNG"></p>
<p>If an error occurs, the program / website will display a warning error message.</p>
<p>If there is no error, the converted value is automatically output without pressing a button and can be copied to the clipboard by pressing the "Copy" button.</p>
`,
    privacyComplete: `<h1> Privacy Policy </h1>
  <h2> Introduction </h2>
  <p>
    With the following data protection declaration we would like to inform you about
    what types of your personal data (hereinafter also briefly as
    "Data" means) for what purposes and to what extent
    to process. The privacy policy applies to all of us
    Processing of personal data, both in the context of the provision
    of our services as well as in particular on our websites, in mobile
    Applications as well as within external online presences, e.g. ours
    Social media profiles (hereinafter collectively referred to as
    "Online offer").
  </p>
  <p> The terms used are not gender-specific. </p>
  <p> As of June 17, 2020 </p>
  <h2> Table of Contents </h2>
  <ul class = "index">
    <li> <a class="index-link"> Introduction </a> </li>
    <li> <a class="index-link"> Responsible </a> </li>
    <li>
      <a class="index-link"> Overview of processing </a>
    </li>
    <li>
      <a class="index-link"> Contact data protection officer </a>
    </li>
    <li> <a class="index-link"> Relevant legal bases </a> </li>
    <li> <a class="index-link"> Security measures </a> </li>
    <li>
      <a class = "index link"
        > Transmission and disclosure of personal data </ ​​a
      >
    </li>
    <li>
       Data processing in third countries 
    </li>
    <li>  Use of cookies</li>
    <li>
    
        > Provision of the online offer and web hosting
      >
    </li>
    <li> <a class="index-link"> Contacting </a> </li>
    <li>
      <a class="index-link"> Presence in social networks (social media) </a>
    </li>
    <li>
        > Plugins and embedded functions as well as content
    </li>
    <li>Deletion of data </li>
    <li>
      <a class = "index link"
        > Change and update of the data protection declaration </ a
      >
    </li>
    <li>
      <a class="index-link"> Rights of data subjects </a>
    </li>
    <li> <a class="index-link"> Definitions </a> </li>
  </ul>
  <h2 id = "m3"> Responsible person </h2>
  <p> Felix Neumann <br /> Ziegeleiweg 3 <br /> 04158 Leipzig </p>
  <p>
    <strong> Email address: </strong>
    <a href="mailto:felix23.fn@gmail.com">felix23.fn@gmail.com</a>
  </p>
  <h2 id = "m11"> Contact data protection officer </h2>
  <p> Felix Neumann <br /> Ziegeleiweg 3 <br /> 04158 Leipzig </p>
  <h2 id = "mOverview"> Overview of processing </h2>
  <p>
    The following overview summarizes the types of data processed and the
    Purposes of their processing together and refers to those concerned
    People.
  </p>
  <h3> Types of data processed </h3>
  <ul>
    <li> inventory data (e.g. names, addresses). </li>
    <li> content data (e.g. text input, photographs, videos). </li>
    <li> contact details (e.g. email, telephone numbers). </li>
    <li> Meta / communication data (e.g. device information, IP addresses). </li>
    <li>
      Usage data (e.g. visited websites, interest in content,
      Access times).
    </li>
  </ul>
  <h3> Categories of data subjects </h3>
  <ul>
    <li> Communication partner. </li>
    <li> Users (e.g. website visitors, users of online services). </li>
  </ul>
  <h3> Purposes of processing </h3>
  <ul>
    <li> Provision of our online offer and user-friendliness. </li>
    <li> Contact requests and communication. </li>
    <li> remarketing. </li>
    <li>
      Tracking (e.g. interest / behavior-related profiling, use of
      Cookies).
    </li>
    <li> Contractual performance and service. </li>
  </ul>
  <h3 id = "m13"> Relevant legal bases </h3>
  <p>
    In the following we share the legal basis of the General Data Protection Regulation
    (GDPR), on the basis of which we process personal data.
    Please note that in addition to the provisions of the GDPR, the
    national data protection requirements in your or our country of residence and domicile
    can apply. Should also be more specific legal bases in individual cases
    we will inform you in the data protection declaration.
  </p><ul>
    <li>
      <strong> Consent (Art. 6 Para. 1 S. 1 lit. a GDPR) </strong> - Die
      Data subject has given their consent to the processing of them
      relevant personal data for a specific purpose or
      given several specific purposes.
    </li>
    <li>
      <strong
        > Contract fulfillment and pre-contractual inquiries (Art. 6 para. 1 sentence 1 lit.
        b. GDPR) </strong
      >
      - Processing is for the performance of a contract whose
      Contracting party is the data subject, or for implementation
      Pre-contractual measures required at the request of those concerned
      Person.
    </li>
    <li>
      <strong> Legitimate interests (Art. 6 Para. 1 S. 1 lit. GDPR) </strong>
      - The processing is to protect the legitimate interests of the
      Responsible or a third party, unless the
      Interests or fundamental rights and freedoms of the data subject,
      that require the protection of personal data predominate.
    </li>
  </ul>
  <p>
    <strong> National data protection regulations in Germany </strong>: Additional
    to the data protection regulations of the General Data Protection Regulation apply
    national regulations on data protection in Germany. Which also includes
    in particular the law on protection against misuse of personal data
    in data processing (Federal Data Protection Act - BDSG). The BDSG contains
    in particular special regulations on the right to information, the right to
    Deletion, the right to object, the processing of special categories
    personal data, for processing for other purposes and for
    Transmission and automated decision making in individual cases
    including profiling. Furthermore, it regulates data processing for
    Purposes of the employment relationship (§ 26 BDSG), in particular with regard
    on the establishment, implementation or termination of
    Employment relationships and the consent of employees. Further
    can apply state data protection laws of the individual federal states
    reach.
  </p>
  <h2 id = "m27"> Security measures </h2>
  <p>
    We meet according to the legal requirements, taking into account
    the state of the art, the implementation costs and the type, scope,
    the circumstances and the purposes of processing as well as the different
    Probabilities of occurrence and the extent of the threat to rights and
    Freedoms of natural persons suitable technical and organizational
    Measures to ensure a level of protection appropriate to the risk.
  </p>
  <p>
    The measures include, in particular, ensuring confidentiality,
    Integrity and availability of data through control of the physical and
    electronic access to the data and its access,
    entering, transferring, ensuring availability and their availability
    Separation. We have also set up procedures that include:
    Exercise of data subject rights, deletion of data and reactions
    to guarantee the risk to the data. We also take the
    Protection of personal data already during the development or selection of
    Hardware, software and processes according to the principle of
    Data protection, through technology design and data protection friendly
    Presets.
  </p>
  <h2 id = "m25"> Transmission and disclosure of personal data </h2>
  <p>
    As part of our processing of personal data,
    that the data to other bodies, companies, legally independent
    Organizational units or people transmitted to them
    be disclosed. The recipients of this data can e.g.
    Payment institutions in the context of payment transactions, with IT tasks
    commissioned service providers or providers of services and content that are in
    include a website. In such a case, we consider the
    legal requirements and in particular conclude corresponding contracts or
    Agreements that serve to protect your data with the recipients of your
    Dates from.
  </p>
  <h2 id = "m24"> Data processing in third countries </h2>
  <p>
    If we have data in a third country (i.e. outside the European Union
    (EU), the European Economic Area (EEA)) or the
    Processing as part of the use of third party services or
    Disclosure or transmission of data to other people, bodies or
    Company takes place, this takes place only in accordance with the legal
    Requirements.
  </p><p>
    Subject to express consent or contractually or legally
    We only process the necessary transmission or leave the data in
    Third countries with a recognized level of data protection, to which the under the
    "Privacy Shield" certified US processors include, or based
    special guarantees, such as contractual obligation through so-called
    Standard safeguard clauses of the EU Commission, the existence of
    Certifications or binding internal data protection regulations,
    process (Art. 44 to 49 GDPR, information page of the EU Commission:
    <a
      href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de"
      target="_blank"
      > https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection_de </a
    >
    ).
  </p>
  <h2 id = "m134"> Use of cookies </h2>
  <p>
    Cookies are text files that contain data from visited websites or domains
    included and saved by a browser on the user's computer
    will. The primary purpose of a cookie is to provide information about a
    Users during or after their visit within an online offer
    to save. For the stored information, e.g. the language settings
    on a website, the login status, a shopping cart or the place where
    a video was watched belong. We count to the term cookies
    also other technologies that perform the same functions as cookies
    (e.g. if user information is based on pseudonymous online identifiers
    stored, also known as "User IDs")
  </p>
  <p>
    <strong
      > The following types of cookies and functions are distinguished: </strong
    >
  </p>
  <ul>
    <li>
      <strong> Temporary cookies (also: session or session cookies): </strong>
      Temporary cookies are deleted after a user has logged in
      Has left the online offer and has closed his browser.
    </li>
    <li>
      <strong> Permanent cookies: </strong> Permanent cookies remain
      saved when the browser is closed. For example, the
      Login status saved or preferred content displayed directly,
      when the user visits a website again. Likewise, the interests
      by users used for range measurement or for marketing purposes
      are stored in such a cookie.
    </li>
    <li>
      <strong> First-party cookies: </strong> First-party cookies are used by us
      set yourself.
    </li>
    <li>
      <strong> Third party cookies (also: third party cookies) </strong>:
      Third-party cookies are mainly used by advertisers (so-called
      Third parties) used to process user information.
    </li>
    <li>
      <strong
        > Necessary (also: essential or absolutely necessary)
        Cookies: </strong
      >
      On the one hand, cookies can be essential for the operation of a website
      be necessary (e.g. to save logins or other user input
      or for security reasons).
    </li>
    <li>
      <strong> Statistics, marketing and personalization cookies </strong>:
      Furthermore, cookies are usually also used as part of the range measurement
      as well as when the interests of a user or be
      Behavior (e.g. viewing certain content, using functions, etc.)
      be saved on individual websites in a user profile. Such
      Profiles serve to e.g. Display content that their
      correspond to potential interests. This procedure is also called
      "Tracking", i.e. tracking the potential interests of users
      designated. . Insofar as we use cookies or "tracking" technologies,
      we will inform you separately in our privacy policy or in
      As part of obtaining consent.
    </li>
  </ul>
  <p>
    <strong> Notes on legal bases: </strong> On what legal basis
    we process your personal data with the help of cookies
    depending on whether we ask you for your consent. If so, and
    You consent to the use of cookies is the legal basis of
    Processing of your data the declared consent. Otherwise, the
    Data processed using cookies based on our legitimate
    Interests (e.g. in a business operation of our
    Online offer and its improvement) processed or if the use
    of cookies is required to meet our contractual obligations
    fulfill.
  </p><p>
    <strong> Storage period: </strong> Unless we provide you with explicit information
    about the duration of storage of permanent cookies (e.g. in the context of a
    so-called cookie opt-ins), please assume that the storage period is up to
    can be up to two years.
  </p>
  <p>
    <strong
      > General information on revocation and objection (opt-out):
    </strong>
    Depending on whether the processing is based on consent or
    legal permission, you have the option of
    revoke your consent or the processing of your data by
    Contradict cookie technologies (collectively, "opt-out"
    designated). You can initially object to this using the settings
    Of your browser, e.g. by using cookies
    deactivate (whereby this also the functionality of our
    Online offer can be restricted). A contradiction to the
    Cookies can also be used for online marketing purposes by means of a
    Variety of services, especially in the case of tracking, through the website
    <a href="https://optout.aboutads.info" target="_blank"
      > https://optout.aboutads.info </a>
    and
    <a href="https://www.youronlinechoices.com/" target="_blank"
      > https://www.youronlinechoices.com/ </a>
    be explained. In addition, you can add further contradiction notices in the frame
    receive information about the service providers and cookies used.
  </p>
  <p>
    <strong
      > Processing of cookie data based on consent </strong
    >: Before we process data as part of the use of cookies or
    let us process, we ask the user for a revocable at any time
    Consent. Before consent has not been given
    If necessary, cookies are used to operate our online offer
    are absolutely necessary.
  </p>
  <ul class = "m-elements">
    <li>
      <strong> Processed data types: </strong> usage data (e.g. visited
      Websites, interest in content, access times),
      Meta / communication data (e.g. device information, IP addresses).
    </li>
    <li>
      <strong> Data subjects: </strong> users (e.g. website visitors,
      Online service users).
    </li>
    <li>
      <strong> Legal basis: </strong> Consent (Art. 6 para. 1 sentence 1 lit. a
      GDPR), legitimate interests (Art. 6 Para. 1 Clause 1 lit. GDPR).
    </li>
  </ul>
  <h2 id = "m225"> Provision of the online offer and web hosting </h2>
  <p>
    To be able to provide our online offer safely and efficiently, take
    we use the services of one or more web hosting providers,
    the online offer from their servers (or servers managed by them)
    can be accessed. For these purposes, we can use infrastructure and
    Platform services, computing capacity, storage space and
    Database services as well as security and technical
    Use maintenance services.
  </p>
  <p>
    About the data processed as part of the provision of the hosting offer
    all information concerning the users of our online offer can belong,
    that arise in the context of use and communication. These include
    regularly the IP address that is necessary to view the content of
    To be able to deliver online offers to browsers, and all within our
    Online offerings or entries made by websites.
  </p>
  <p>
    <strong> Collection of access data and log files </strong>: We ourselves (or
    our web hosting provider) collect data on every access to the server
    (so-called server log files). The address and
    Name of the websites and files accessed, date and time of access,
    Amounts of data transferred, notification of successful access, browser type and
    Version, the user's operating system, referrer URL (the one previously visited
    Page) and usually include IP addresses and the requesting provider.
  </p>
  <p>
    The server log files can be used for security purposes
    e.g. to avoid overloading the server (especially in the
    Case of abusive attacks, so-called DDoS attacks) and to
    others to ensure server utilization and stability.
  </p><ul class = "m-elements">
    <li>
      <strong> Processed data types: </strong> content data (e.g. text input,
      Photographs, videos), usage data (e.g. visited websites, interest in
      Content, access times), meta / communication data (e.g.
      Device information, IP addresses).
    </li>
    <li>
      <strong> Data subjects: </strong> users (e.g. website visitors,
      Online service users).
    </li>
    <li>
      <strong> Legal basis: </strong> Legitimate interests (Art. 6 para. 1
      S. 1 lit. f. GDPR).
    </li>
  </ul>
  <h2 id = "m182"> Contacting </h2>
  <p>
    When contacting us (e.g. via contact form, email, telephone
    or via social media) are the details of the requesting persons
    processed, as far as this to answer the contact inquiries and any
    requested measures is required.
  </p>
  <p>
    Answering contact inquiries under contractual or
    pre-contractual relationships take place to fulfill our contractual
    Obligations or to answer (pre) contractual inquiries and in
    Other based on the legitimate interests in answering the
    Requests.
  </p>
  <ul class = "m-elements">
    <li>
      <strong> Processed data types: </strong> inventory data (e.g. names,
      Addresses), contact details (e.g. email, telephone numbers), content data (e.g.
      Text input, photographs, videos).
    </li>
    <li> <strong> Data subjects: </strong> Communication partners. </li>
    <li>
      <strong> Purposes of processing: </strong> contact requests and
      Communication.
    </li>
    <li>
      <strong> Legal basis: </strong> contract fulfillment and pre-contractual
      Inquiries (Art. 6 Para. 1 S. 1 lit. GDPR), legitimate interests (Art.
      6 para. 1 sentence 1 lit. f. GDPR).
    </li>
  </ul>
  <h2 id = "m136"> Presence in social networks (social media) </h2>
  <p>
    We maintain and process online presences within social networks
    in this context, user data in order to interact with the users active there
    communicate or to offer information about us.
  </p>
  <p>
    We would like to point out that the data of users outside the area of ​​the
    European Union can be processed. This can help you
    Users pose risks because, for example, enforcing user rights
    could be difficult. With regard to US providers operating under the
    Privacy Shield are certified or comparable guarantees of a secure
    Data protection levels, we point out that they are
    commit to comply with EU data protection standards.
  </p>
  <p>
    Furthermore, the data of users within social networks are usually
    processed for market research and advertising purposes. For example, based on the
    User behavior and the resulting interests of the users
    User profiles are created. The usage profiles can in turn
    used to e.g. Ads inside and outside the
    To set up networks that presumably correspond to the interests of the users.
    For these purposes, cookies are usually placed on the users' computers
    stored in which the usage behavior and interests of users
    get saved. Furthermore, data can also be found in the usage profiles
    regardless of the devices used by users
    (especially if the users are members of the respective platforms
    and are logged in to them).
  </p>
  <p>
    For a detailed description of the respective processing forms and the
    We refer to the possibilities of objection (opt-out)
    Data protection declarations and information from the operators of the respective networks.
  </p>
  <p>
    Also in the case of requests for information and the assertion of
    We would like to point out that rights of those affected are most effective with the
    Providers can be asserted. Only the providers have each
    Access to user data and can take appropriate action directly
    seize and provide information. If you still need help, then
    you can contact us.
  </p><ul class = "m-elements">
    <li>
      <strong> Processed data types: </strong> inventory data (e.g. names,
      Addresses), contact details (e.g. email, telephone numbers), content data (e.g.
      Text input, photographs, videos), usage data (e.g. visited
      Websites, interest in content, access times),
      Meta / communication data (e.g. device information, IP addresses).
    </li>
    <li>
      <strong> Data subjects: </strong> users (e.g. website visitors,
      Online service users).
    </li>
    <li>
      <strong> Purposes of processing: </strong> contact requests and
      Communication, tracking (e.g. interest / behavior-related profiling,
      Use of cookies), remarketing.
    </li>
    <li>
      <strong> Legal basis: </strong> Legitimate interests (Art. 6 para. 1
      S. 1 lit. f. GDPR).
    </li>
  </ul>
  <p> <strong> Services and service providers used: </strong> </p>
  <ul class = "m-elements">
    <li>
      <strong> Instagram: </strong> social network; Service provider: Instagram
      Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA; Website:
      <a href="https://www.instagram.com" target="_blank"
        > https://www.instagram.com </a
      >; Data protection:
      <a href="https://instagram.com/about/legal/privacy" target="_blank"
        > https://instagram.com/about/legal/privacy </a
      >.
    </li>
    <li>
      <strong> Twitter: </strong> social network; Service provider: Twitter Inc.,
      1355 Market Street, Suite 900, San Francisco, CA 94103, USA;
      Data protection:
      <a href=https://twitter.com/de/privacy" target="_blank"
        > https://twitter.com/de/privacy </a
      >, (Settings)
      <a href = "https://twitter.com/personalization" target="_blank"
        > https://twitter.com/personalization </a
      >; Privacy Shield (guarantee of data protection level when processing
      Data in the USA):
      <a
        href="https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active"
        target="_blank"
        > https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active </a
      >.
    </li>
  </ul>
  <h2 id = "m328"> Plugins, embedded functions and content </h2>
  <p>
    We integrate functional and content elements into our online offer that
    from the servers of their respective providers (hereinafter referred to as
    "Third-party provider"). This can be, for example
    Trade graphics, videos or social media buttons as well as posts
    (hereinafter referred to as "content").
  </p>
  <p>
    The integration always presupposes that the third party providers of this content
    Process the IP address of the user, since without the IP address the content
    could not send to their browser. The IP address is therefore for the
    Presentation of this content or functions required. We strive to,
    to use only such content, the respective provider of the IP address
    use only to deliver the content. Third parties can
    furthermore so-called pixel tags (invisible graphics, also as "web beacons"
    use) for statistical or marketing purposes. Through the
    "Pixel tags" can contain information such as visitor traffic to the pages
    this website. The pseudonymous information can
    are also stored in cookies on the user's device and under
    other technical information about the browser and the operating system
    referring websites, the time of visit and other information on use
    of our online offer as well as containing such information
    other sources.
  </p>
  <p>
    <strong> Notes on legal bases: </strong> if we order the users
    ask for their consent to the use of third party providers is
    Legal basis for the processing of data consent. Otherwise
    the data of the users based on our legitimate interests
    (i.e. interest in efficient, economical and recipient-friendly
    Services) processed. In this context we would also like to refer you to the
    Information on the use of cookies in this data protection declaration
    Clues.
  </p>
  <ul class = "m-elements">
    <li>
      <strong> Processed data types: </strong> usage data (e.g. visited
      Websites, interest in content, access times),
      Meta / communication data (e.g. device information, IP addresses).
    </li>
    <li>
      <strong> Data subjects: </strong> users (e.g. website visitors,
      Online service users).
    </li>
    <li>
      <strong> Purposes of processing: </strong> Provision of our
      Online offerings and user-friendliness, contractual services and
      Service.
    </li>
    <li>
      <strong> Legal basis: </strong> Legitimate interests (Art. 6 para. 1
      S. 1 lit. f. GDPR).
    </li>
  </ul>
  <p> <strong> Services and service providers used: </strong> </p>
  <ul class = "m-elements">
    <li>
      <strong> Google Fonts: </strong> We bind the fonts ("Google
      Fonts ") of the provider Google, whereby the data of the user alone
      Used for the display of the fonts in the browser of the user
      will. The integration is based on our legitimate
      Interests in a technically safe, maintenance-free and efficient
      Use of fonts, their uniform representation and under
      Consideration of possible licensing restrictions for their
      Involvement. Service provider: Google Ireland Limited, Gordon House, Barrow
      Street, Dublin 4, Ireland, parent company: Google LLC, 1600 Amphitheater
      Parkway, Mountain View, CA 94043, USA; Website:
      <a href = "https://fonts.google.com/" target="_blank"
        > https://fonts.google.com/ </a
      >; Data protection:
      <a href = "https://policies.google.com/privacy" target="_blank"
        > https://policies.google.com/privacy </a
      >; Privacy Shield (guarantee of data protection level when processing
      Data in the USA):
      <a
        href = "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active"
        target="_blank"
        > https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active </a
      >.
    </li>
  </ul><h2 id = "m12"> Deletion of data </h2>
  <p>
    The data processed by us is in accordance with the legal
    Specifications deleted as soon as their consent for processing is permitted
    be revoked or other permits no longer applicable (e.g. if the purpose
    the processing of this data has ceased or is not for the purpose
    required are).
  </p>
  <p>
    Unless the data is deleted because it is for others and legally
    permissible purposes are required, their processing is for these purposes
    limited. This means that the data is blocked and not for other purposes
    processed. This applies e.g. for data from commercial or
    must be kept for tax reasons or their storage
    to assert, exercise or defend legal claims or to
    Protection of the rights of another natural or legal person
    is required.
  </p>
  <p>
    Further information on the deletion of personal data may also be given
    within the scope of the individual data protection notices of this data protection declaration
    respectively.
  </p>
  <h2 id = "m15"> Change and update of the data protection declaration </h2>
  <p>
    We ask you to regularly review the content of our privacy policy
    to inform. We will adjust the privacy policy as soon as the
    Changes to the data processing carried out by us make this necessary
    do. We will inform you as soon as the changes
    Act of cooperation on your part (e.g. consent) or another
    individual notification is required.
  </p>
  <p>
    Provided we have addresses and contact information in this data protection declaration
    of companies and organizations, please note that the
    Addresses can change over time and ask for the information
    Check contact.
  </p>
  <h2 id = "m10"> Rights of the data subjects </h2>
  <p>
    As the data subject, you have various rights under the GDPR, which are:
    in particular from Art. 15 to 21 GDPR:
  </p><ul>
    <li>
      <strong>
        Right to object: </strong
      > You have the right, for reasons arising from your
        special situation arise at any time against the processing of you
        relevant personal data based on Art. 6 Para. 1
        lit. e or f GDPR occurs to file an objection; This also applies to
        profiling based on these provisions. You will
        processed personal data in order to direct advertising
        operate, you have the right to object to the
        Processing of your personal data for the purpose
        to place such advertising; this also applies to profiling, to the extent
        it is related to such direct mail.
    </li>
    <li>
      <strong> Right to withdraw consent: </strong> You have the right
      revoke given consent at any time.
    </li>
    <li>
      <strong> Right to information: </strong> You have the right to receive a confirmation
      to request whether the relevant data are processed and on
      Information about this data as well as further information and a copy of the
      Data according to the legal requirements.
    </li>
    <li>
      <strong> Right to rectification: </strong> You have the corresponding
      legal requirements the right to complete you
      relevant data or the correction of incorrect information concerning you
      To request data.
    </li>
    <li>
      <strong> Right to erasure and restriction of processing: </strong>
      In accordance with the legal requirements, you have the right to request
      that your data will be deleted immediately, or alternatively
      a restriction of processing in accordance with the legal requirements
      to request the data.
    </li>
    <li>
      <strong> Right to data portability: </strong> You have the right to
      relevant data that you have provided to us in accordance with the
      legal requirements in a structured, common and
      to receive machine-readable format or its transmission to a
      to request other responsible parties.
    </li>
    <li>
      <strong> Complaint to regulatory authority: </strong> You are also following
      In accordance with the legal requirements, the right to contact a supervisory authority
      in particular in the Member State of your habitual residence,
      Your workplace or the place of the alleged violation complaint
      file if you believe that the processing of you
      relevant personal data violates the GDPR.
    </li>
  </ul>
  <h2 id = "m42"> Definition of terms </h2>
  <p>
    This section gives you an overview of those in this
    Terms used in data protection declaration. Many of the terms are
    taken from the law and mainly defined in Art. 4 GDPR. The
    legal definitions are binding. The following explanations
    on the other hand, should primarily serve for understanding. The terms are
    sorted alphabetically.
  </p><ul class = "glossary">
    <li>
      <strong> Personal data: </strong> are "personal data"
      all information related to an identified or identifiable
      natural person (hereinafter referred to as "data subject"); as
      A natural person who is directly or identifiable is considered
      indirectly, in particular by assigning an identifier such as a name,
      for an identification number, for location data, for an online identification (e.g.
      Cookie) or identified for one or more special characteristics
      can be the expression of physical, physiological, genetic,
      psychological, economic, cultural or social identity of this
      natural person.
    </li>
    <li>
      <strong> Remarketing: </strong> Talks about "remarketing" or "retargeting"
      one if e.g. for advertising purposes it is noted for which products a
      Interested in one website to the user on another
      Websites about these products, e.g. in advertisements to remember.
    </li>
    <li>
      <strong> Tracking: </strong> One speaks of "tracking" when the behavior
      can be traced by users across several online offers.
      As a rule, with regard to the online offers used
      Behavior and interest information in cookies or on servers of the
      Stored providers of tracking technologies (so-called profiling).
      This information can then e.g. used to the
      Show users advertisements that are likely to represent their interests
      correspond.
    </li>
    <li>
      <strong> Responsible: </strong> The "responsible" is the
      natural or legal person, public authority, agency or other
      Body, alone or with others, about the purposes and means
      decides the processing of personal data.
    </li>
    <li>
      <strong> Processing: </strong> "Processing" is everyone with or without
      Operation performed using automated procedures or any such
      Series of operations related to personal data. The term
      goes far and includes practically every handling of data, be it that
      Collection, evaluation, storage, transmission or deletion.
    </li>
  </ul>`,
    impressComplete: `<h1> Imprint </h1>
<h2 id = "m46"> service provider </h2>
<p> Felix Neumann </p>
<p> Ziegeleiweg 3 </p>
<p> 04158 Leipzig </p>
<p> Germany </p>
<h2 id = "m56"> Contact options </h2> <p> <strong> Email address: </strong> <a href="mailto:felix23.fn@gmail.com"> felix23.fn@gmail .com </a> </p>
<h2 id = "m172"> Social media and other online presences </h2> <p> <strong> This legal notice also applies to the following social media presences and online profiles: </strong> </p>
<p> <a href="https://www.facebook.com/chem.util.9" target="_blank"> https://www.facebook.com/chem.util.9 </a> </p>
<p> <a href="https://twitter.com/ChemistryUtil" target="_blank"> https://twitter.com/ChemistryUtil </a> </p>
<p> <a href="https://instagram.com/chemistryutility" target="_blank"> https://instagram.com/chemistryutility </a> </p>`,
  },
};
