import React from 'react';


export class Agreement extends React.Component {
    render() {
        return (
            <div>
                <div className="well">На нашому сайті ми використовуємо cookie для збору інформації технічного характеру.<br />Зокрема,
                  для персоніфіцированої работи сайту ми обробляємо IP-адресу регіону вашого
            місця розташування.&nbsp;<button className="btn btn-primary btn-sm">OK</button></div>
            </div>
        );
    }
}