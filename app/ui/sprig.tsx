'use client'

import React, { useEffect } from 'react';

import { sprig } from '@sprig-technologies/sprig-browser';

export default function Sprig() {

  if (typeof window !== "undefined") {
    const Sprig = sprig.configure({
        environmentId: 'W3FtqOZgt8J1',
        })
    
    Sprig.setUserId("10");
      }

    return (
      <div>
      </div>
    )
  }

