'use client'

import { sprig } from '@sprig-technologies/sprig-browser';

export default function Sprig() {

  if (typeof window !== "undefined") {
    const Sprig = sprig.configure({
        environmentId: 'W3FtqOZgt8J1',
        })
    
    Sprig.setUserId("20");
    Sprig.setAttribute('MyAttribute', 'xx');
      }

    return (
      <div>
      </div>
    )
  }

