# Buildable Textures
Crea i tuoi blocchi Minecraft usando strutture in calcestruzzo a pixel art o uno qualsiasi dei
4.294.967.296 colori tramite input ARGB diretto — nessuno strumento esterno, nessun editor di resource pack. Un rapido riavvio di Minecraft è necessario per caricare completamente i nuovi blocchi, poiché i blocchi registrati dinamicamente vengono inizializzati all'avvio.
## Come funziona
Posiziona blocchi di calcestruzzo colorati o qualsiasi blocco ARGB (vedi sotto) in una griglia 16×16 e interagisci con il Blocco Scanner. La mod legge il pattern e genera un blocco con texture completa, salvato in
`config/buildabletextures/<nomeblocco>/`. Dopo aver riavviato Minecraft, il blocco appare
nella scheda creativa Blocchi da costruzione e si comporta come qualsiasi blocco standard.
Per le texture 2D, la griglia si estende lungo Y (su) e Z (sud) — la stessa texture viene
applicata a tutte e sei le facce del blocco risultante.
Per le texture 3D, il Blocco Scanner genera un frame cavo 18×18×18 che si estende
verso sud, su e est. Ogni faccia del frame è una tela 16×16 indipendente:
ciò che costruisci su una determinata faccia diventerà la texture della faccia corrispondente
del blocco risultante, dando pieno controllo su tutti e sei i lati in modo indipendente.
Hai bisogno di più dei 16 colori del calcestruzzo? La mod include i blocchi ARGB: assegna qualsiasi codice esadecimale ARGB a 8 caratteri come nome, e verranno generati come blocchi a tinta unita con cui costruire, dando accesso a tutti i 4.294.967.296 colori possibili direttamente sulla tua tela.
## Caratteristiche
- Modalità di scansione 2D e 3D
- Generazione opzionale del frame, sempre orientato verso sud, su e est
- 4.294.967.296 colori disponibili tramite input esadecimale ARGB
- Nessuno strumento esterno, nessuna gestione di resource pack — la mod gestisce tutto
- Rilevamento nomi duplicati con feedback nell'interfaccia grafica
- Nomi dei blocchi localizzati in 10 lingue, tra cui inglese, italiano e francese
## Il Blocco Scanner
Quando si interagisce con esso, il Blocco Scanner apre un'interfaccia dedicata in cui il giocatore
può dare un nome alla texture, generare facoltativamente un frame come guida al posizionamento e confermare
la scansione in modalità 2D o 3D. Sono accettati come nomi solo caratteri alfanumerici, spazi, underscore
e trattini.
## Nota
Sebbene all'avvio sia implementato un sistema di pulizia e validazione anti-crash, si consiglia comunque di non modificare manualmente i file JSON in `config/buildabletextures/` per una migliore esperienza.
La licenza è ARR, ma se hai un'idea di miglioramento, comunicamela su github/commenti
Fabric Loader e Fabric API richiesti
