function extractEmails(input) {
    let emailPattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g

    let emails = input.match(emailPattern);
    emails.forEach(email => {
        console.log(email);

    });

}

//string pattern = @"(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))";

// 1 . (^|(?<=\s)) - Искаме да проверим дали има начало на стринг ИЛИ ( " | ") дали има празно място (това прави първа група)
// 2.   ([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)  - търсим :
// (дума , която съдържа букви и цифри)
// (после търсим някой от разрешените символи АКО има някое от тях , затова използваме "?")
// (после пак дума , която съдържа букви и цифри)
// тука броя на думите може да бъде 1
// 3. (слагаме @)
// 4. ([a-zA-Z]+([\.\-_][A-Za-z]+)+) - започваме с търсенето на дума , но задължително след първата дума трябва да има някой от разрешените символи "." ,  "-" или "_" , иначе ще имаш грешката да имаш само една дума , а по условие се искат поне 2 думи и между тях да има един от разрешените символи и накрая domain - a (.bg , .net  и т.н).
// например: @mail.uu.net 
// ([a-zA-Z]+([\.\-_][A-Za-z]+)+) - плюсът е важен за група 8 , тъй като търси още съвпадения ... това ти позволява да имаш маркираш още думи , но задължително да започват със един от разрешените символи
// 5. (\b|(?=\s))  Същото като 1. - търси за boundery \b Или positive lookahead (или погледни на дясно за да видиш дали има white space)
//https://softuni.bg/forum/14416/01-extract-emails-programming-fundamentals-regex-exercises-domashno 
 
