function escolheTaxi(tf1,vqr1,tf2,vqr2) {
    
    let distancia = 5;
    let empresa1 = parseFloat(tf1) + parseFloat(vqr1)*distancia;
    let empresa2 = parseFloat(tf2) + parseFloat(vqr2)*distancia;
    
    if(empresa1 === empresa2){
       return 'Tanto faz';
    };
    if(empresa1 < empresa2){
        return "Empresa 1";
    }
    if(empresa1 > empresa2){
       return "Empresa 2"
    };

  };
escolheTaxi(2.50,1.00,5.00,0.75)