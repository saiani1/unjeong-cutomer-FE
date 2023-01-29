import React from 'react';
import classNames from 'classnames/bind';

import styles from './infoTxt.scss';

const cx = classNames.bind(styles);

function InfoTxt({
  Icon,
  w,
  h,
  viewBox,
  productInfo = true,
  productName,
  txt,
  unit,
}) {
  return (
    <div className={cx('infoTxt-wrap', productInfo ? '' : 'f-s')}>
      <Icon width={w} height={h} viewBox={viewBox} />
      <div>
        {productName === '타로' && <span className={cx('desc')}>셔플당</span>}
        {productName === '운영시간' && <span className={cx('desc')}>매일</span>}
        {productName === '위치' && (
          <span className={cx('desc')}>부산 금정구 금정로52번길 46</span>
        )}
        <span className={cx('txt')}>{txt}</span>
        {unit && <span className={cx('unit')}>{unit}</span>}
      </div>
    </div>
  );
}

export default InfoTxt;