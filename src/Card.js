import React from 'react';

function Card() {
  const colors = ['blue', 'green', 'red'];

  return (
    <div>
      <h1>Card Components</h1>
      <div className="row">
        {colors.map((color, index) => (
          <div className="col" key={index}>
            <div className="card m-2 d-flex justify-content-center" style={{ width: '18rem', backgroundColor: color }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card Title</h6>
                <p className="card-text">This text is a self inspired excerpt that is made to highlight the contents of the card. It contains text that show relevance to the English Language.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
