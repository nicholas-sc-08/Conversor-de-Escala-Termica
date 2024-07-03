let element_inpt_num_um = document.getElementById(`inpt_num_um`);
    let element_inpt_num_dois = document.getElementById(`inpt_num_dois`);
    let element_slct_escolha_de_conversor_de_temperatura_um = document.getElementById(`slct_escolha_de_conversor_de_temperatura_um`);
    let element_slct_escolha_de_conversor_de_temperatura_dois = document.getElementById(`slct_escolha_de_conversor_de_temperatura_dois`);
        const um_grau_em_fahrenheit = 1.8;
        const valor_zero_em_fahrenheit = 32;
        const valor_zero_em_kelvin = 273.15;
    let resultado;
    let armazenar_valores;
    let element_div_exibir_formula = document.getElementById(`formula`);

   function call_functions(){

        if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Celsius` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Fahrenheit`){
            conversor_de_celsius_para_fahrenheit();
            } else if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Fahrenheit` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Celsius`){
                conversor_de_fahrenheit_para_celsius();
            } else if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Celsius` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Kelvin`){
                conversor_de_celsius_para_kelvin();
            } else if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Kelvin` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Celsius`){
                conversor_de_kelvin_para_celsius();
            } else if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Fahrenheit` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Kelvin`){
                conversor_de_fahrenheit_para_kelvin();
            } else if(element_slct_escolha_de_conversor_de_temperatura_um.value == `Kelvin` && element_slct_escolha_de_conversor_de_temperatura_dois.value == `Fahrenheit`) {
                conversor_de_kelvin_para_fahrenheit();
        };
}

    function conversor_de_celsius_para_fahrenheit(){

       element_inpt_num_dois.value = (Number(element_inpt_num_um.value) * um_grau_em_fahrenheit + valor_zero_em_fahrenheit).toFixed(2);
       element_div_exibir_formula.innerHTML = `(${element_inpt_num_um.value}°C x ${um_grau_em_fahrenheit}) + ${valor_zero_em_fahrenheit} = ${element_inpt_num_dois.value} °F`;
    }

    function conversor_de_fahrenheit_para_celsius(){

        element_inpt_num_dois.value = ((Number(element_inpt_num_um.value) - valor_zero_em_fahrenheit) / um_grau_em_fahrenheit).toFixed(2);
        element_div_exibir_formula.innerHTML = `(${element_inpt_num_um.value}°C - ${valor_zero_em_fahrenheit}) ÷ ${um_grau_em_fahrenheit} = ${element_inpt_num_dois.value} = °C`;

    };

    function conversor_de_celsius_para_kelvin(){

        element_inpt_num_dois.value = (Number(element_inpt_num_um.value) + valor_zero_em_kelvin).toFixed(2);
        element_div_exibir_formula.innerHTML = `${element_inpt_num_um.value}°C + ${valor_zero_em_kelvin} K = ${element_inpt_num_dois.value} K`;
    };

    function conversor_de_kelvin_para_celsius(){

        element_inpt_num_dois.value = (Number(element_inpt_num_um.value) - valor_zero_em_kelvin).toFixed(2);
        element_div_exibir_formula.innerHTML = `${element_inpt_num_um.value} - ${valor_zero_em_kelvin} K = ${element_inpt_num_dois.value} °C`;
    };
    
    function conversor_de_fahrenheit_para_kelvin(){

      armazenar_valores = (Number(element_inpt_num_um.value) - valor_zero_em_fahrenheit) / um_grau_em_fahrenheit;
        element_inpt_num_dois.value = (armazenar_valores + valor_zero_em_kelvin).toFixed(2);
        element_div_exibir_formula.innerHTML = `${element_inpt_num_um.value}°C - ${valor_zero_em_fahrenheit} ÷ ${um_grau_em_fahrenheit} | ${armazenar_valores.toFixed(2)} + ${valor_zero_em_kelvin} K = ${element_inpt_num_dois.value} K`;
    };

    function conversor_de_kelvin_para_fahrenheit(){

        armazenar_valores = Number(element_inpt_num_um.value) - valor_zero_em_kelvin;
        element_inpt_num_dois.value = ((armazenar_valores * um_grau_em_fahrenheit) + valor_zero_em_fahrenheit).toFixed(2); 
        element_div_exibir_formula.innerHTML = `${element_inpt_num_um.value} K - ${valor_zero_em_kelvin} | ${armazenar_valores.toFixed(2)} x ${um_grau_em_fahrenheit} + ${valor_zero_em_fahrenheit} = ${element_inpt_num_dois.value} °F`;
    };
