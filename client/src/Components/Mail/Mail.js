import React from 'react';
import './Mail.scss';

function Mail() {
  return (
    <div className="mail">
        <div class="page">
        <h3>Contact Us for more Infos !</h3>
  <label class="field field_v1">
      
    <input class="field__input" placeholder="e.g. Stanislav"/>
    <span class="field__label-wrap">
      <span class="field__label">First name</span>
    </span>
  </label>
  <label class="field field_v2">
    <input class="field__input" placeholder="e.g. Melnikov"/>
    <span class="field__label-wrap">
      <span class="field__label">Last name</span>
    </span>
  </label>    
  <label class="field field_v3">
    <input class="field__input" placeholder="e.g. melnik909@ya.ru"/>
    <span class="field__label-wrap">
      <span class="field__label">E-mail</span>
    </span>
  </label>
</div>
<br/> <br/>
<a class="button">Send</a>

    </div>
  )
}

export default Mail