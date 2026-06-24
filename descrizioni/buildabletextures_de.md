# Buildable Textures
Gestalte deine eigenen Minecraft-Blöcke mit Beton-Pixelart-Strukturen oder einer der
4.294.967.296 Farben über direkte ARGB-Eingabe — keine externen Werkzeuge, keine Resource-Pack-Editoren.
Ein kurzer Minecraft-Neustart ist erforderlich, um die neuen Blöcke vollständig zu laden, da dynamisch registrierte Blöcke beim Start initialisiert werden.
## So funktioniert es
Platziere farbige Betonblöcke oder beliebige ARGB-Blöcke (siehe unten) in einem 16×16-Raster und interagiere mit dem Scanner-Block. Die Mod liest das Muster und generiert einen vollständig texturierten Block, der in
`config/buildabletextures/<blockname>/` gespeichert wird. Nach dem Neustart von Minecraft erscheint
der Block im Kreativmodus-Tab Baublöcke und verhält sich wie jeder andere Standardblock.
Bei 2D-Texturen erstreckt sich das Raster entlang Y (oben) und Z (süd) — dieselbe Textur wird
auf alle sechs Seiten des resultierenden Blocks angewendet.
Bei 3D-Texturen generiert der Scanner-Block einen 18×18×18 hohlen Würfelrahmen, der sich
nach Süden, oben und Osten erstreckt. Jede Seite des Rahmens ist eine unabhängige 16×16-Leinwand:
Was du auf einer bestimmten Seite baust, wird zur Textur der entsprechenden Seite
des resultierenden Blocks und gibt dir die volle Kontrolle über alle sechs Seiten unabhängig voneinander.
Benötigst du mehr als die 16 Betonfarben? Die Mod enthält ARGB-Blöcke: Gib einen beliebigen 8-stelligen ARGB-Hex-Code als Namen ein, und sie werden als einfarbige Blöcke generiert, mit denen du bauen kannst — so hast du direkten Zugriff auf alle 4.294.967.296 möglichen Farben auf deiner Leinwand.
## Funktionen
- 2D- und 3D-Scanmodi
- Optionale Rahmengenerierung, immer nach Süden, oben und Osten ausgerichtet
- 4.294.967.296 Farben via ARGB-Hex-Eingabe verfügbar
- Keine externen Werkzeuge, keine Resource-Pack-Verwaltung — die Mod erledigt alles
- Erkennung doppelter Namen mit Rückmeldung in der Benutzeroberfläche
- Lokalisierte Blocknamen in 10 Sprachen, darunter Englisch, Italienisch und Französisch
## Der Scanner-Block
Beim Interagieren öffnet der Scanner-Block eine dedizierte Oberfläche, in der der Spieler
die Textur benennen, optional einen Rahmen als Platzierungshilfe generieren und den
Scan im 2D- oder 3D-Modus bestätigen kann. Als Namen werden nur alphanumerische Zeichen, Leerzeichen, Unterstriche
und Bindestriche akzeptiert.
## Hinweis
Obwohl beim Start ein Anti-Crash-Bereingungs- und Validierungssystem implementiert ist, wird empfohlen, die JSON-Dateien in `config/buildabletextures/` nicht manuell zu bearbeiten, um die beste Erfahrung zu gewährleisten.
Die Lizenz ist ARR, aber wenn du eine Verbesserungsidee hast, teile sie mir auf github/Kommentaren mit
Fabric Loader und Fabric API erforderlich
