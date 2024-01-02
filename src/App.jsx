import React, { useState, useRef } from 'react';

const Stopwatch = () => {
 const [time, setTime] = useState(0);
 const [running, setRunning] = useState(false);
 const intervalRef = useRef(null);
 const startTimeRef = useRef(0);
}
