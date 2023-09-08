function gerar() {

    let cliente1 = window.document.getElementById('cliente1');
    let valor1 = window.document.getElementById('valor1');

    let cliente2 = window.document.getElementById('cliente2');
    let valor2 = window.document.getElementById('valor2');

    let cliente3 = window.document.getElementById('cliente3');
    let valor3 = window.document.getElementById('valor3');

    let cliente4 = window.document.getElementById('cliente4');
    let valor4 = window.document.getElementById('valor4');

    let cliente5 = window.document.getElementById('cliente5');
    let valor5 = window.document.getElementById('valor5');

    let cliente6 = window.document.getElementById('cliente6');
    let valor6 = window.document.getElementById('valor6');

    let cliente7 = window.document.getElementById('cliente7');
    let valor7 = window.document.getElementById('valor7');

    let cliente8 = window.document.getElementById('cliente8');
    let valor8 = window.document.getElementById('valor8');

    let cliente9 = window.document.getElementById('cliente9');
    let valor9 = window.document.getElementById('valor9');

    let cliente10 = window.document.getElementById('cliente10');
    let valor10 = window.document.getElementById('valor10');

    let cliente11 = window.document.getElementById('cliente11');
    let valor11 = window.document.getElementById('valor11');

    let cliente12 = window.document.getElementById('cliente12');
    let valor12 = window.document.getElementById('valor12');

    let cliente13 = window.document.getElementById('cliente13');
    let valor13 = window.document.getElementById('valor13');

    let lado = window.document.getElementById('lado-a')

    let data = window.document.getElementById('data').value
    let motorista = window.document.getElementById("motorista").value


    let dia = data.slice(-2)
    let mes = data.slice(-5, -3)
    let ano = data.slice(-10, -6)



    lado.innerHTML = (`

<div class="cobranca-pronta" id="cabecalho-pronto">
    <div class="cabecalho" id="cabecalho">
        <img src="img/logo.png" id="logo" class="logo" alt="logo">
        <p>Data: ${dia}/${mes}/${ano} </p>
    </div>
    <h1 id="titulo">Relação de Cobrança<h1>
    
    <table class="tg" style="undefined;table-layout: fixed; width: 700px">
            <thead>
                <tr>
                    <th class="tg-amwm">Cliente</th>
                    <th class="tg-amwm">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-0lax">${cliente1.value}</td>
                    <td class="tg-0lax">${valor1.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente2.value}</td>
                    <td class="tg-0lax">${ valor2.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente3.value}</td>
                    <td class="tg-0lax">${valor3.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente4.value}</td>
                    <td class="tg-0lax">${valor4.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente5.value}</td>
                    <td class="tg-0lax">${valor5.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente6.value}</td>
                    <td class="tg-0lax">${valor6.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente7.value}</td>
                    <td class="tg-0lax">${valor7.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente8.value}</td>
                    <td class="tg-0lax">${valor8.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente9.value}</td>
                    <td class="tg-0lax">${valor9.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente10.value}</td>
                    <td class="tg-0lax">${valor10.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente11.value}</td>
                    <td class="tg-0lax">${valor11.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente12.value}</td>
                    <td class="tg-0lax">${valor12.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax">${cliente13.value}</td>
                    <td class="tg-0lax">${valor13.value}</td>
                </tr>
                <tr>
                    <td class="tg-0lax" colspan="2">OBS:<br>Motorista: ${motorista}</td>
                </tr>
            </tbody>
            </table>
    
            <button id="botao" onclick="window.print()">Imprimir / Salvar</button>
            <button id="botao" onclick="window.location.reload()">Recarregar Pagina</button>
</div>   
    `)

    lado.style.background = "#d3d3d3"



}