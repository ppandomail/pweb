// Longitud, acceso a caracter e interpolación 
texto = "Bemvindo"
texto.length       // 8
texto[0]           // "B"
texto[8]           // undefined
texto + " Pepe"    // Bemvindo Pepe
t = `Oi, ${texto}` // "Oi, Bemvindo". Es un "template literal"

// Posiciones y substrings
texto.charAt(0)         // "B"
texto.indexOf("v")      // 3
texto.indexOf("a")      // -1
texto.repeat(3)         // "BemvindoBemvindoBemvindo"
texto.substring(3)      // "vindo"
texto.substring(3,5)    // "vi"
texto.substring(-3)     // "ndo"
texto.split("v")        // ["Bem", "indo"]

// Comprobaciones
texto.startsWith("Bem") // true
texto.endsWith("do")    // true
texto.includes("mvi")   // true

// Búsquedas
texto = "El gato, el perro y el pato."
regexp = /.a.o/g
texto.search(regexp)    // 3, porque la primera coincidencia ocurre en la posición 3 (gato)
texto.match(regexp)     // ["gato", "pato"], las dos coincidencias encontradas

// Reemplazos
texto = "Hola gato, ¿eres un perro o eres un pato?"
texto.replace("g", "p")      // "Hola pato, ¿eres un perro o eres un pato?"
texto.replaceAll("e", "i")   // "Hola gato, ¿iris un pirro o iris un pato?"

// Modificación de strings
texto = "Los gatos dominarán el mundo."
texto.toLowerCase()     // "los gatos dominarán el mundo."
texto.toUpperCase()     // "LOS GATOS DOMINARÁN EL MUNDO."
"15".padStart(5, "0")   // "00015"
"15".padEnd(5, "-")     // "15---"

texto = "  ¡Saludad a vuestro nuevo rey gato!  "
texto.trim()            // "¡Saludad a vuestro nuevo rey gato!"
texto.trimStart()       // "¡Saludad a vuestro nuevo rey gato!  "
texto.trimEnd()         // "  ¡Saludad a vuestro nuevo rey gato!"

texto = "Hola"
texto.concat("Mundo")   // "HolaMundo"