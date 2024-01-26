"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.resize(400, 500);
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const nodes = [];
    var headersSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Headers");
    var herosSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Heros");
    var footersSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Footers");
    var aanbodSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Aanbod");
    var dienstenSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Diensten");
    var rndHeader = Math.round(Math.random() * (headersSet.children.length - 1));
    var rndHero = Math.round(Math.random() * (herosSet.children.length - 1));
    var rndFooter = Math.round(Math.random() * (footersSet.children.length - 1));
    var rndAanbod = Math.round(Math.random() * (aanbodSet.children.length - 1));
    var rndDiensten = Math.round(Math.random() * (dienstenSet.children.length - 1));
    var headerComp = headersSet.children[rndHeader];
    var heroComp = herosSet.children[rndHero];
    ;
    var aanbodComp = aanbodSet.children[rndAanbod];
    ;
    var dienstenComp = dienstenSet.children[rndDiensten];
    ;
    var footerComp = footersSet.children[rndFooter];
    ;
    var newHeaderComp = headerComp.createInstance();
    newHeaderComp.name = "Header " + (rndHeader + 1).toString();
    newHeaderComp.x = 0;
    var newHeroComp = heroComp.createInstance();
    newHeroComp.name = "Hero " + (rndHero + 1).toString();
    newHeroComp.x = 0;
    newHeroComp.y = newHeaderComp.height + 0;
    var newAanbodComp = aanbodComp.createInstance();
    newAanbodComp.name = "Aanbod " + (rndAanbod + 1).toString();
    newAanbodComp.x = 0;
    newAanbodComp.y = newHeroComp.height + 220;
    var newDienstenComp = dienstenComp.createInstance();
    newDienstenComp.name = "Diensten " + (rndDiensten + 1).toString();
    newDienstenComp.x = 0;
    newDienstenComp.y = newHeroComp.height + 1329;
    var newFooterComp = footerComp.createInstance();
    newFooterComp.name = "Footer " + (rndFooter + 1).toString();
    newFooterComp.x = 0;
    newFooterComp.y = newDienstenComp.height + 2273;
    figma.currentPage.appendChild(newFooterComp);
    figma.currentPage.appendChild(newDienstenComp);
    figma.currentPage.appendChild(newAanbodComp);
    figma.currentPage.appendChild(newHeroComp);
    figma.currentPage.appendChild(newHeaderComp);
    nodes.push(newAanbodComp);
    nodes.push(newHeroComp);
    nodes.push(newDienstenComp);
    nodes.push(newFooterComp);
    nodes.push(newHeaderComp);
    //figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
});
