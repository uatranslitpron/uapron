var app = new Vue({
    el: '#app',
    data: {
        cyrillicName: 'ТАБЛИЦЯ транслітерації',
        transliteratedName: ''
    },
    methods: {
        transliterate: function () {
            const cyrillicText = this.cyrillicName;
            if (validCyrillic(cyrillicText)) {
                this.transliteratedName = transliteration(cyrillicText);
            } else {
                this.transliteratedName = '';
            }
        },
        speakEn: function () {
            responsiveVoice.speak(this.transliteratedName.toLowerCase(), 'UK English Male');
        },
        speakLv: function () {
            responsiveVoice.speak(this.transliteratedName.toLowerCase(), 'Latvian Male');
        }
    }
})

var voices = ["UK English Female", "UK English Male", "US English Female", "US English Male", "Arabic Male", "Arabic Female", "Armenian Male", "Australian Female", "Australian Male", "Brazilian Portuguese Female", "Brazilian Portuguese Male", "Chinese Female", "Chinese Male", "Chinese (Hong Kong) Female", "Chinese (Hong Kong) Male", "Chinese Taiwan Female", "Chinese Taiwan Male", "Czech Female", "Czech Male", "Danish Female", "Danish Male", "Deutsch Female", "Deutsch Male", "Dutch Female", "Dutch Male", "Finnish Female", "Finnish Male", "French Female", "French Male", "Greek Female", "Greek Male", "Hindi Female", "Hindi Male", "Hungarian Female", "Hungarian Male", "Indonesian Female", "Indonesian Male", "Italian Female", "Italian Male", "Japanese Female", "Japanese Male", "Korean Female", "Korean Male", "Latin Female", "Latin Male", "Norwegian Female", "Norwegian Male", "Polish Female", "Polish Male", "Portuguese Female", "Portuguese Male", "Romanian Female", "Russian Female", "Russian Male", "Slovak Female", "Slovak Male", "Spanish Female", "Spanish Male", "Spanish Latin American Female", "Spanish Latin American Male", "Swedish Female", "Swedish Male", "Tamil Male", "Thai Female", "Thai Male", "Turkish Female", "Turkish Male", "Vietnamese Female", "Vietnamese Male", "Afrikaans Male", "Albanian Male", "Bosnian Male", "Catalan Male", "Croatian Male", "Esperanto Male", "Icelandic Male", "Latvian Male", "Macedonian Male", "Moldavian Female", "Moldavian Male", "Montenegrin Male", "Serbian Male", "Serbo-Croatian Male", "Swahili Male", "Welsh Male", "Fallback UK Female"];

var validCyrillic = function (textToValidate) {
    var regexp = /^([А-Яа-яЇїІіЄєҐґ\s\-`']+)$/;
    return textToValidate.length > 0 && regexp.test(textToValidate)
}


var transliteration = function (inputText) {
    var rules = [
        { 'pattern': 'а', 'replace': 'a' },
        { 'pattern': 'б', 'replace': 'b' },
        { 'pattern': 'в', 'replace': 'v' },
        { 'pattern': 'зг', 'replace': 'zgh' },
        { 'pattern': 'г', 'replace': 'h' },
        { 'pattern': 'ґ', 'replace': 'g' },
        { 'pattern': 'д', 'replace': 'd' },
        { 'pattern': 'е', 'replace': 'e' },
        { 'pattern': '^є', 'replace': 'ye' },
        { 'pattern': 'є', 'replace': 'ie' },
        { 'pattern': 'ж', 'replace': 'zh' },
        { 'pattern': 'з', 'replace': 'z' },
        { 'pattern': 'и', 'replace': 'y' },
        { 'pattern': 'і', 'replace': 'i' },
        { 'pattern': '^ї', 'replace': 'yi' },
        { 'pattern': 'ї', 'replace': 'i' },
        { 'pattern': '^й', 'replace': 'y' },
        { 'pattern': 'й', 'replace': 'i' },
        { 'pattern': 'к', 'replace': 'k' },
        { 'pattern': 'л', 'replace': 'l' },
        { 'pattern': 'м', 'replace': 'm' },
        { 'pattern': 'н', 'replace': 'n' },
        { 'pattern': 'о', 'replace': 'o' },
        { 'pattern': 'п', 'replace': 'p' },
        { 'pattern': 'р', 'replace': 'r' },
        { 'pattern': 'с', 'replace': 's' },
        { 'pattern': 'т', 'replace': 't' },
        { 'pattern': 'у', 'replace': 'u' },
        { 'pattern': 'ф', 'replace': 'f' },
        { 'pattern': 'х', 'replace': 'kh' },
        { 'pattern': 'ц', 'replace': 'ts' },
        { 'pattern': 'ч', 'replace': 'ch' },
        { 'pattern': 'ш', 'replace': 'sh' },
        { 'pattern': 'щ', 'replace': 'shch' },
        // { 'pattern': 'ьо', 'replace': 'io' },
        // { 'pattern': 'ьї', 'replace': 'ii' },
        { 'pattern': 'ь', 'replace': '' },
        { 'pattern': '^ю', 'replace': 'yu' },
        { 'pattern': 'ю', 'replace': 'iu' },
        { 'pattern': '^я', 'replace': 'ya' },
        { 'pattern': 'я', 'replace': 'ia' },      
        { 'pattern': '’', 'replace': '' },
        { 'pattern': '\'', 'replace': '' },
        { 'pattern': '`', 'replace': '' }
    ];

    var words = inputText.toLowerCase.split(' ');
    for (var n in words) {
        var word = words[n];
        for (var ruleNumber in rules) {
            word = word.replace(
                new RegExp(rules[ruleNumber]['pattern'], 'gm'),
                rules[ruleNumber]['replace']
            );
        }
        inputText = inputText.replace(words[n], word);
    }
    return inputText.toUpperCase();
};