"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[94216],{811704:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-947b5316","path":"/devices/100.462.31.html","title":"Paul Neuhaus 100.462.31 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Paul Neuhaus 100.462.31 control via MQTT","description":"Integrate your Paul Neuhaus 100.462.31 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Resetting remote","slug":"resetting-remote","link":"#resetting-remote","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action group (numeric)","slug":"action-group-numeric","link":"#action-group-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709413966000},"filePathRelative":"devices/100.462.31.md"}')},810429:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(166252);const o=(0,n._)("h1",{id:"paul-neuhaus-100-462-31",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#paul-neuhaus-100-462-31","aria-hidden":"true"},"#"),(0,n.Uk)(" Paul Neuhaus 100.462.31")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"100.462.31")],-1),s=(0,n._)("td",null,"Vendor",-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Q-REMOTE")],-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, action_group, linkquality")],-1),u=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/100.462.31.png",alt:"Paul Neuhaus 100.462.31"})])],-1),c=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Before you can pair your Paul Neuhaus remote for Q-Lights you have to reset it / remove it from any network. Pairing process will fail otherwise.</p><h3 id="resetting-remote" tabindex="-1"><a class="header-anchor" href="#resetting-remote" aria-hidden="true">#</a> Resetting remote</h3><p>You will need a paper clip or similar tool to reset the remote control.</p><ol><li>Turn over the remote (on and off button should always face upwards)</li><li>Slide on the battery cover on the back of the remote downwards. Above the left battery you will see a small hole. This is where the reset button is located.</li><li>Push the bent paper clip into the reset opening (hole) and hold down for more than 5 seconds. During this time the led on the front side will blink 4 time. Keep the paper clip pressed!</li><li>The status LED now will blink 10 times very fast. If this happens you can remove the paper clip (right after the first fast blink).</li></ol><p>The remote now is reset and you can continue with the pairing process.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ol><li>Hold the remote close to the coordinator / router you want it to pair with.</li><li>Press the on button of the remote for 5 seconds.</li><li>The LED of the remote will start to blink fast - pairing process is initialized.</li><li>If the led stops blinking the device should be paired.</li></ol>',8),h=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),p=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>brightness_stop</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>recall_*</code>, <code>scene_*</code>.</p><h3 id="action-group-numeric" tabindex="-1"><a class="header-anchor" href="#action-group-numeric" aria-hidden="true">#</a> Action group (numeric)</h3><p>Group where the action was triggered on. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),m={},g=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),o,(0,n._)("table",null,[a,(0,n._)("tbody",null,[l,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=Paul%20Neuhaus"},{default:(0,n.w5)((()=>[(0,n.Uk)("Paul Neuhaus")])),_:1})])]),r,d,u])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),c,(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);