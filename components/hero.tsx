/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles.logo)}>
        <img src="/icons.svg" alt="" style={{ position: 'absolute', right: 0, top: 10 }} />
        <div style={{ display: 'flex', width: 1024, justifyContent: 'space-between' }}>
          <img
            src="/iwd-logo.svg"
            alt="Women Techmakers - Internation Women's Day LATAM 2021"
            style={{ width: '50%' }}
          />
          <img src="/slogan.svg" alt="Courage to create" style={{ maxWidth: 350 }} />
        </div>
      </div>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Online</strong>
        </p>
      </div>
    </div>
  );
}
