!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.sortable=e(t.jQuery)}(this,function(t){"use strict";var e,n,a=t(),r=[],o=function(t){t.off("dragstart.h5s"),t.off("dragend.h5s"),t.off("selectstart.h5s"),t.off("dragover.h5s"),t.off("dragenter.h5s"),t.off("drop.h5s")},i=function(t){t.off("dragover.h5s"),t.off("dragenter.h5s"),t.off("drop.h5s")},s=function(t,e){t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text",""),t.dataTransfer.setDragImage&&t.dataTransfer.setDragImage(e.item,e.x,e.y)},u=function(t,e){return e.x||(e.x=parseInt(t.pageX-e.draggedItem.offset().left)),e.y||(e.y=parseInt(t.pageY-e.draggedItem.offset().top)),e},l=function(t){return{item:t[0],draggedItem:t}},c=function(t,e){var n=l(e);n=u(t,n),s(t,n)},d=function(t,e){return"undefined"==typeof t?e:t},m=function(t){t.removeData("opts"),t.removeData("connectWith"),t.removeData("items"),t.removeAttr("aria-dropeffect")},f=function(t){t.removeAttr("aria-grabbed"),t.removeAttr("draggable"),t.removeAttr("role")},p=function(t,e){return t[0]===e[0]?!0:void 0!==t.data("connectWith")?t.data("connectWith")===e.data("connectWith"):!1},g=function(t){var e=t.data("opts")||{},n=t.children(e.items),a=e.handle?n.find(e.handle):n;i(t),m(t),a.off("mousedown.h5s"),o(n),f(n)},h=function(e){var n=e.data("opts"),a=e.children(n.items),r=n.handle?a.find(n.handle):a;e.attr("aria-dropeffect","move"),r.attr("draggable","true"),"function"!=typeof document.createElement("span").dragDrop||n.disableIEFix||r.on("mousedown.h5s",function(){-1!==a.index(this)?this.dragDrop():t(this).parents(n.items)[0].dragDrop()})},v=function(t){var e=t.data("opts"),n=t.children(e.items),a=e.handle?n.find(e.handle):n;t.attr("aria-dropeffect","none"),a.attr("draggable",!1),a.off("mousedown.h5s")},y=function(t){var e=t.data("opts"),n=t.children(e.items),a=e.handle?n.find(e.handle):n;o(n),a.off("mousedown.h5s"),i(t)},b=function(o,i){var u=t(o),l=String(i);return i=t.extend({connectWith:!1,placeholder:null,dragImage:null,disableIEFix:!1,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging"},i),u.each(function(){var o=t(this);if(/enable|disable|destroy/.test(l))return void b[l](o);i=d(o.data("opts"),i),o.data("opts",i),y(o);var u,m,f,g=o.children(i.items),v=null===i.placeholder?t("<"+(/^ul|ol$/i.test(this.tagName)?"li":"div")+' class="'+i.placeholderClass+'"/>'):t(i.placeholder).addClass(i.placeholderClass);if(!o.attr("data-sortable-id")){var T=r.length;r[T]=o,o.attr("data-sortable-id",T),g.attr("data-item-sortable-id",T)}o.data("items",i.items),a=a.add(v),i.connectWith&&o.data("connectWith",i.connectWith),h(o),g.attr("role","option"),g.attr("aria-grabbed","false"),g.on("dragstart.h5s",function(a){a.stopImmediatePropagation(),i.dragImage?(s(a.originalEvent,{item:i.dragImage,x:0,y:0}),console.log("WARNING: dragImage option is deprecated and will be removed in the future!")):c(a.originalEvent,t(this),i.dragImage),e=t(this),e.addClass(i.draggingClass),e.attr("aria-grabbed","true"),u=e.index(),n=e.height(),m=t(this).parent(),e.parent().triggerHandler("sortstart",{item:e,startparent:m})}),g.on("dragend.h5s",function(){e&&(e.removeClass(i.draggingClass),e.attr("aria-grabbed","false"),e.show(),a.detach(),f=t(this).parent(),e.parent().triggerHandler("sortstop",{item:e,startparent:m}),(u!==e.index()||m.get(0)!==f.get(0))&&e.parent().triggerHandler("sortupdate",{item:e,index:f.children(f.data("items")).index(e),oldindex:g.index(e),elementIndex:e.index(),oldElementIndex:u,startparent:m,endparent:f}),e=null,n=null)}),t(this).add([v]).on("drop.h5s",function(n){return p(o,t(e).parent())?(n.stopPropagation(),a.filter(":visible").after(e),e.trigger("dragend.h5s"),!1):void 0}),g.add([this,v]).on("dragover.h5s dragenter.h5s",function(r){if(p(o,t(e).parent())){if(r.preventDefault(),r.originalEvent.dataTransfer.dropEffect="move",g.is(this)){var s=t(this).height();if(i.forcePlaceholderSize&&v.height(n),s>n){var u=s-n,l=t(this).offset().top;if(v.index()<t(this).index()&&r.originalEvent.pageY<l+u)return!1;if(v.index()>t(this).index()&&r.originalEvent.pageY>l+s-u)return!1}e.hide(),v.index()<t(this).index()?t(this).after(v):t(this).before(v),a.not(v).detach()}else a.is(this)||t(this).children(i.items).length||(a.detach(),t(this).append(v));return!1}})})};return b.destroy=function(t){g(t)},b.enable=function(t){h(t)},b.disable=function(t){v(t)},t.fn.sortable=function(t){return b(this,t)},b}),System.register("tags/helpers/tagIcon",[],function(t){"use strict";function e(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return e.className="icon TagIcon "+(e.className||""),t?(e.style=e.style||{},e.style.backgroundColor=t.color()):e.className+=" untagged",m("span",e)}return t("default",e),{setters:[],execute:function(){}}}),System.register("tags/helpers/tagLabel",["flarum/utils/extract"],function(t){"use strict";function e(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];e.style=e.style||{},e.className="TagLabel "+(e.className||"");var a=n(e,"link");if(t){var r=t.color();r&&(e.style.backgroundColor=e.style.color=r,e.className+=" colored"),a&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}),e.config=m.route)}else e.className+=" untagged";return m(a?"a":"span",e,m("span",{className:"TagLabel-text"},t?t.name():app.trans("tags.deleted")))}var n;return t("default",e),{setters:[function(t){n=t["default"]}],execute:function(){}}}),System.register("tags/helpers/tagsLabel",["flarum/utils/extract","tags/helpers/tagLabel","tags/utils/sortTags"],function(t){"use strict";function e(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=[],i=n(e,"link");return e.className="TagsLabel "+(e.className||""),t?r(t).forEach(function(e){(e||1===t.length)&&o.push(a(e,{link:i}))}):o.push(a()),m("span",e,o)}var n,a,r;return t("default",e),{setters:[function(t){n=t["default"]},function(t){a=t["default"]},function(t){r=t["default"]}],execute:function(){}}}),System.register("tags/models/Tag",["flarum/Model","flarum/utils/mixin","flarum/utils/computed"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,r,o,i,s=function(t,e,n){for(var a=!0;a;){var r=t,o=e,i=n;s=l=u=void 0,a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;t=l,e=o,n=i,a=!0}};return{setters:[function(t){a=t["default"]},function(t){r=t["default"]},function(t){o=t["default"]}],execute:function(){i=function(t){function a(){e(this,a),s(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return n(a,t),a}(r(a,{name:a.attribute("name"),slug:a.attribute("slug"),description:a.attribute("description"),color:a.attribute("color"),backgroundUrl:a.attribute("backgroundUrl"),backgroundMode:a.attribute("backgroundMode"),position:a.attribute("position"),parent:a.hasOne("parent"),defaultSort:a.attribute("defaultSort"),isChild:a.attribute("isChild"),isHidden:a.attribute("isHidden"),discussionsCount:a.attribute("discussionsCount"),lastTime:a.attribute("lastTime",a.transformDate),lastDiscussion:a.hasOne("lastDiscussion"),isRestricted:a.attribute("isRestricted"),canStartDiscussion:a.attribute("canStartDiscussion"),isPrimary:o("position","parent",function(t,e){return null!==t&&e===!1})})),t("default",i)}}}),System.register("tags/utils/sortTags",[],function(t){"use strict";function e(t){return t.slice(0).sort(function(t,e){var n=t.position(),a=e.position(),r=t.parent(),o=e.parent();return null===n&&null===a?e.discussionsCount()-t.discussionsCount():null===a?-1:null===n?1:r===o?n-a:r?r===e?1:r.position()-a:o?o===t?-1:n-o.position():0})}return t("default",e),{setters:[],execute:function(){}}}),System.register("tags/addTagPermission",["flarum/extend","flarum/components/PermissionGrid"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.extend},function(t){n=t["default"]}],execute:function(){t("default",function(){e(n.prototype,"moderateItems",function(t){t.add("tag",{label:"编辑标签",permission:"discussion.tag"})})})}}}),System.register("tags/addTagsPane",["flarum/extend","flarum/components/AdminNav","flarum/components/AdminLinkButton","tags/components/TagsPage"],function(t){"use strict";var e,n,a,r;return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){a=t["default"]},function(t){r=t["default"]}],execute:function(){t("default",function(){app.routes.tags={path:"/tags",component:r.component()},app.extensionSettings.tags=function(){return m.route(app.route("tags"))},e(n.prototype,"items",function(t){t.add("tags",a.component({href:app.route("tags"),icon:"tags",children:"话题分类",description:"管理站点的节点与标签列表。"}))})})}}}),System.register("tags/addTagsPermissionScope",["flarum/extend","flarum/components/PermissionGrid","flarum/components/PermissionDropdown","flarum/components/Dropdown","flarum/components/Button","tags/helpers/tagLabel","tags/helpers/tagIcon","tags/utils/sortTags"],function(t){"use strict";var e,n,a,r,o,i,s,u,l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};return{setters:[function(t){e=t.extend},function(t){n=t["default"]},function(t){a=t["default"]},function(t){r=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]},function(t){s=t["default"]},function(t){u=t["default"]}],execute:function(){t("default",function(){e(n.prototype,"scopeItems",function(t){u(app.store.all("tags")).filter(function(t){return t.isRestricted()}).forEach(function(e){return t.add("tag"+e.id(),{label:i(e),onremove:function(){return e.save({isRestricted:!1})},render:function(t){if(t.permission){var n=void 0;if("forum.view"===t.permission?n="view":"forum.startDiscussion"===t.permission?n="startDiscussion":0===t.permission.indexOf("discussion.")&&(n=t.permission),n){var r=l({},t);return r.permission="tag"+e.id()+"."+n,a.component(r)}}return""}})})}),e(n.prototype,"scopeControlItems",function(t){var e=u(app.store.all("tags").filter(function(t){return!t.isRestricted()}));e.length&&t.add("tag",r.component({className:"Dropdown--restrictByTag",buttonClassName:"Button Button--text",label:"话题分类",icon:"plus",caretIcon:null,children:e.map(function(t){return o.component({icon:!0,children:[s(t,{className:"Button-icon"})," ",t.name()],onclick:function(){return t.save({isRestricted:!0})}})})}))})})}}}),System.register("tags/main",["tags/models/Tag","tags/addTagsPermissionScope","tags/addTagPermission","tags/addTagsPane"],function(t){"use strict";var e,n,a,r;return{setters:[function(t){e=t["default"]},function(t){n=t["default"]},function(t){a=t["default"]},function(t){r=t["default"]}],execute:function(){app.initializers.add("tags",function(t){t.store.models.tags=e,n(),a(),r()})}}}),System.register("tags/components/EditTagModal",["flarum/components/Modal","flarum/components/Button","flarum/utils/string","tags/helpers/tagLabel"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,r,o,i,s,u=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),l=function(t,e,n){for(var a=!0;a;){var r=t,o=e,i=n;s=l=u=void 0,a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;t=l,e=o,n=i,a=!0}};return{setters:[function(t){a=t["default"]},function(t){r=t["default"]},function(t){o=t.slug},function(t){i=t["default"]}],execute:function(){s=function(t){function a(){e(this,a);for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];l(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,n),this.tag=this.props.tag||app.store.createRecord("tags"),this.name=m.prop(this.tag.name()||""),this.slug=m.prop(this.tag.slug()||""),this.description=m.prop(this.tag.description()||""),this.color=m.prop(this.tag.color()||""),this.isHidden=m.prop(this.tag.isHidden()||!1)}return n(a,t),u(a,[{key:"className",value:function(){return"EditTagModal Modal--small"}},{key:"title",value:function(){return this.name()?i({name:this.name,color:this.color}):"创建分类"}},{key:"content",value:function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,"名称"),m("input",{className:"FormControl",placeholder:"分类名称",value:this.name(),oninput:function(e){t.name(e.target.value),t.slug(o(e.target.value))}})),m("div",{className:"Form-group"},m("label",null,"目录"),m("input",{className:"FormControl",value:this.slug(),oninput:m.withAttr("value",this.slug)})),m("div",{className:"Form-group"},m("label",null,"描述"),m("textarea",{className:"FormControl",value:this.description(),oninput:m.withAttr("value",this.description)})),m("div",{className:"Form-group"},m("label",null,"颜色"),m("input",{className:"FormControl",placeholder:"#aaaaaa",value:this.color(),oninput:m.withAttr("value",this.color)})),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",value:"1",checked:this.isHidden(),onchange:m.withAttr("checked",this.isHidden)}),"所有话题中隐藏"))),m("div",{className:"Form-group"},r.component({type:"submit",className:"Button Button--primary EditTagModal-save",loading:this.loading,children:"保存更改"}),this.tag.exists?m("button",{type:"button",className:"Button EditTagModal-delete",onclick:this["delete"].bind(this)},"删除分类"):"")))}},{key:"onsubmit",value:function(t){var e=this;t.preventDefault(),this.loading=!0,this.tag.save({name:this.name(),slug:this.slug(),description:this.description(),color:this.color(),isHidden:this.isHidden()}).then(function(){return e.hide()},function(){e.loading=!1,m.redraw()})}},{key:"delete",value:function(){confirm("你确定删除这个分类吗？删除后该分类中的话题不会被删除。 ")&&(this.tag["delete"]().then(function(){return m.redraw()}),this.hide())}}]),a}(a),t("default",s)}}}),System.register("tags/components/TagSettingsModal",["flarum/components/Modal","flarum/components/Button","flarum/utils/saveConfig"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a,r,o,i,s=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),u=function(t,e,n){for(var a=!0;a;){var r=t,o=e,i=n;s=l=u=void 0,a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;t=l,e=o,n=i,a=!0}};return{setters:[function(t){a=t["default"]},function(t){r=t["default"]},function(t){o=t["default"]}],execute:function(){i=function(t){function a(){e(this,a);for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];u(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,n),this.minPrimaryTags=m.prop(app.config["tags.min_primary_tags"]||0),this.maxPrimaryTags=m.prop(app.config["tags.max_primary_tags"]||0),this.minSecondaryTags=m.prop(app.config["tags.min_secondary_tags"]||0),this.maxSecondaryTags=m.prop(app.config["tags.max_secondary_tags"]||0)}return n(a,t),s(a,[{key:"setMinTags",value:function(t,e,n){t(n),e(Math.max(n,e()))}},{key:"className",value:function(){return"TagSettingsModal Modal--small"}},{key:"title",value:function(){return"设定范围"}},{key:"content",value:function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,"必选节点数量"),m("div",{className:"helpText"},"设定应用于话题中的节点数量范围（最小值与最大值）"),m("div",{className:"TagSettingsModal-rangeInput"},m("input",{className:"FormControl",type:"number",min:"0",value:this.minPrimaryTags(),oninput:m.withAttr("value",this.setMinTags.bind(this,this.minPrimaryTags,this.maxPrimaryTags))})," 至 ",m("input",{className:"FormControl",type:"number",min:this.minPrimaryTags(),value:this.maxPrimaryTags(),oninput:m.withAttr("value",this.maxPrimaryTags)}))),m("div",{className:"Form-group"},m("label",null,"必选标签数量"),m("div",{className:"helpText"},"设定应用于话题中的标签数量范围（最小值与最大值）"),m("div",{className:"TagSettingsModal-rangeInput"},m("input",{className:"FormControl",type:"number",min:"0",value:this.minSecondaryTags(),oninput:m.withAttr("value",this.setMinTags.bind(this,this.minSecondaryTags,this.maxSecondaryTags))})," 至 ",m("input",{className:"FormControl",type:"number",min:this.minSecondaryTags(),value:this.maxSecondaryTags(),oninput:m.withAttr("value",this.maxSecondaryTags)}))),m("div",{className:"Form-group"},r.component({type:"submit",className:"Button Button--primary TagSettingsModal-save",loading:this.loading,children:"保存更改"}))))}},{key:"onsubmit",value:function(t){var e=this;t.preventDefault(),this.loading=!0,o({"tags.min_primary_tags":this.minPrimaryTags(),"tags.max_primary_tags":this.maxPrimaryTags(),"tags.min_secondary_tags":this.minSecondaryTags(),"tags.max_secondary_tags":this.maxSecondaryTags()}).then(function(){return e.hide()},function(){e.loading=!1,m.redraw()})}}]),a}(a),t("default",i)}}}),System.register("tags/components/TagsPage",["flarum/Component","flarum/components/Button","tags/components/EditTagModal","tags/components/TagSettingsModal","tags/helpers/tagIcon","tags/utils/sortTags"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return m("li",{"data-id":t.id(),style:{color:t.color()}},m("div",{className:"TagListItem-info"},u(t),m("span",{className:"TagListItem-name"},t.name()),o.component({className:"Button Button--link",icon:"pencil",onclick:function(){return app.modal.show(new i({tag:t}))}})),t.isChild()||null===t.position()?"":m("ol",{className:"TagListItem-children"},l(app.store.all("tags")).filter(function(e){return e.parent()===t}).map(a)))}var r,o,i,s,u,l,c,d=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),f=function(t,e,n){for(var a=!0;a;){var r=t,o=e,i=n;s=l=u=void 0,a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;t=l,e=o,n=i,a=!0}};return{setters:[function(t){r=t["default"]},function(t){o=t["default"]},function(t){i=t["default"]},function(t){s=t["default"]},function(t){u=t["default"]},function(t){l=t["default"]}],execute:function(){c=function(t){function r(){e(this,r),f(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return n(r,t),d(r,[{key:"view",value:function(){return m("div",{className:"TagsPage"},m("div",{className:"TagsPage-header"},m("div",{className:"container"},m("p",null,"节点与标签用于话题的分类。节点类似于传统论坛的版块，它们可以有两个结构层次。标签没有结构层次，常用于微型的话题分类。"),o.component({className:"Button Button--primary",icon:"plus",children:"创建分类",onclick:function(){return app.modal.show(new i)}}),o.component({className:"Button",children:"设定范围",onclick:function(){return app.modal.show(new s)}}))),m("div",{className:"TagsPage-list"},m("div",{className:"container"},m("div",{className:"TagGroup"},m("label",null,"节点"),m("ol",{className:"TagList TagList--primary"},l(app.store.all("tags")).filter(function(t){return null!==t.position()&&!t.isChild()}).map(a))),m("div",{className:"TagGroup"},m("label",null,"标签"),m("ul",{className:"TagList"},app.store.all("tags").filter(function(t){return null===t.position()}).sort(function(t,e){return t.name().localeCompare(e.name())}).map(a))))))}},{key:"config",value:function(){var t=this;this.$("ol, ul").sortable({connectWith:"primary"}).on("sortupdate",function(e,n){n.startparent.is("ol")&&n.endparent.is("ul")&&app.store.getById("tags",n.item.data("id")).pushData({attributes:{position:null,isChild:!1},relationships:{parent:null}});var a=t.$(".TagList--primary > li").map(function(){return{id:$(this).data("id"),children:$(this).find("li").map(function(){return $(this).data("id")}).get()}}).get();a.forEach(function(t,e){var n=app.store.getById("tags",t.id);n.pushData({attributes:{position:e,isChild:!1},relationships:{parent:null}}),t.children.forEach(function(t,e){app.store.getById("tags",t).pushData({attributes:{position:e,isChild:!0},relationships:{parent:n}})})}),app.request({url:app.forum.attribute("apiUrl")+"/tags/order",method:"POST",data:{order:a}}),m.redraw.strategy("all"),m.redraw()})}}]),r}(r),t("default",c)}}});