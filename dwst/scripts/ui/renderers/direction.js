
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

export default function renderDirection(type) {

  const direction = document.createElement('span');
  direction.setAttribute('class', `dwst-direction dwst-direction--${type}`);
  direction.innerHTML = `${type}:`;

  return direction;

}

