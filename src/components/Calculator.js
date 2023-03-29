import React, { useState } from 'react';
import calculate from '../logic/calculate';
import {
  CALCULATOROPERATORS,
  NUM_1,
  NUM_2,
  NUM_3,
  NUM_4,
} from '../utilities/consts';
import Button from '../button/Button';
import './Calculator.css';

export default function Calculator() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(data, buttonName);
    setData(newData);
  };

  return (
    <>
      <h1>Let&apos;s do some math!</h1>
      <div className="cal-container">
        <div className="cal-result">{data.next || data.total || '0'}</div>
        <div>
          {CALCULATOROPERATORS.map((item) => (
            <Button key={item.id} title={item.operator} className={`btn-${item.id}`} onClick={() => handleClick(item.operator)} />
          ))}
        </div>
        <div>
          {NUM_1.map((item) => (
            <Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => handleClick(item.num)} />
          ))}
        </div>
        <div>
          {NUM_2.map((item) => (
            <Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => handleClick(item.num)} />
          ))}
        </div>
        <div>
          {NUM_3.map((item) => (
            <Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => handleClick(item.num)} />
          ))}
        </div>
        <div>
          {NUM_4.map((item) => (
            <Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => handleClick(item.num)} />
          ))}
        </div>
      </div>
    </>
  );
}
