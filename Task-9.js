let text_under = '';
let curr_elem = '';
let calc_input = document.querySelector('#display_text');
let curr_elem_input = document.querySelector('#under_display_text');

document.querySelectorAll('button').forEach(item => {
    item.onclick = () => {
        var button_value = item.innerText;

        if (button_value == 'C') {
            curr_elem = "";
            text_under = "";
        } else if (button_value == '←') {
            text_under = text_under.slice(0, -1);
            curr_elem = text_under.slice(-1);
        } else if (button_value == '=') {
            curr_elem = eval(text_under);
            text_under = eval(text_under);

        } 
        else 
        {
            if (text_under.length < 18 )
            {
                
                if( button_value == '*' ||
                    button_value == '/' ||
                    button_value == '.' ||
                    button_value == '-' ||
                    button_value == '+'  ) 
                    {
                        curr_elem = '';
                        button_value = CheckValue(button_value);
                    }

                var last_symb = text_under.slice(-1);
                if (last_symb == '*' ||
                    last_symb == '/' ||
                    last_symb == '-' ||
                    last_symb == '+' ) {curr_elem = '';}
                text_under += button_value;
                curr_elem += button_value;
            }
        }   
    
    console.log(text_under, curr_elem);

    curr_elem_input.innerText = curr_elem;
    calc_input.value = text_under ;
    curr_elem = String(curr_elem);
    text_under = String(text_under);
} 
})

CheckValue = (button_value) => {
                var last_symb = text_under.slice(-1);
                if (text_under.length == 0) 
                    return '';
                if (button_value == last_symb) 
                    return ''
                 else if (last_symb == '*' || last_symb == '/' || last_symb == '-' || last_symb == '+' || last_symb == '.') 
                    return ''
                 else 
                    return button_value
            }