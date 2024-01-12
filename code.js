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
    var rndHeader = Math.floor(Math.random() * 5) + 1;
    var rndHero = Math.floor(Math.random() * 3) + 1;
    var rndFooter = Math.floor(Math.random() * 5) + 1;
    var rndAanbod = Math.floor(Math.random() * 3) + 1;
    var rndDiensten = Math.floor(Math.random() * 2) + 1;
    var headerComp = null;
    var heroComp = null;
    var aanbodComp = null;
    var dienstenComp = null;
    var footerComp = null;
    switch (rndHeader) {
        case 1:
            headerComp = headersSet.findChild(n => n.name == "Header 1");
            break;
        case 2:
            headerComp = headersSet.findChild(n => n.name == "Header 2");
            break;
        case 3:
            headerComp = headersSet.findChild(n => n.name == "Header 3");
            break;
        case 4:
            headerComp = headersSet.findChild(n => n.name == "Header 4");
            break;
        case 5:
            headerComp = headersSet.findChild(n => n.name == "Header 5");
            break;
        default:
            headerComp = headersSet.findChild(n => n.name == "Header 1");
            break;
    }
    switch (rndFooter) {
        case 1:
            footerComp = footersSet.findChild(n => n.name == "Footer 1");
            break;
        case 2:
            footerComp = footersSet.findChild(n => n.name == "Footer 2");
            break;
        case 3:
            footerComp = footersSet.findChild(n => n.name == "Footer 3");
            break;
        case 4:
            footerComp = footersSet.findChild(n => n.name == "Footer 4");
            break;
        case 5:
            footerComp = footersSet.findChild(n => n.name == "Footer 5");
            break;
        default:
            footerComp = footersSet.findChild(n => n.name == "Footer 1");
            break;
    }
    switch (rndAanbod) {
        case 1:
            aanbodComp = aanbodSet.findChild(n => n.name == "Aanbod 1");
            break;
        case 2:
            aanbodComp = aanbodSet.findChild(n => n.name == "Aanbod 2");
            break;
        case 3:
            aanbodComp = aanbodSet.findChild(n => n.name == "Aanbod 3");
            break;
        default:
            aanbodComp = aanbodSet.findChild(n => n.name == "Aanbod 1");
            break;
    }
    switch (rndDiensten) {
        case 1:
            dienstenComp = dienstenSet.findChild(n => n.name == "Dienst 1");
            break;
        case 2:
            dienstenComp = dienstenSet.findChild(n => n.name == "Dienst 2");
            break;
        default:
            dienstenComp = dienstenSet.findChild(n => n.name == "Dienst 1");
            break;
    }
    switch (rndHero) {
        case 1:
            heroComp = herosSet.findChild(n => n.name == "Hero 1");
            break;
        case 2:
            heroComp = herosSet.findChild(n => n.name == "Hero 2");
            break;
        case 3:
            heroComp = herosSet.findChild(n => n.name == "Hero 3");
            break;
        default:
            heroComp = herosSet.findChild(n => n.name == "Hero 1");
            break;
    }
    var newHeaderComp = headerComp.createInstance();
    newHeaderComp.name = "Header " + rndHeader.toString();
    newHeaderComp.x = 0;
    var newHeroComp = heroComp.createInstance();
    newHeroComp.name = "Hero " + rndHero.toString();
    newHeroComp.x = 0;
    newHeroComp.y = newHeaderComp.height + 0;
    var newAanbodComp = aanbodComp.createInstance();
    newAanbodComp.name = "Aanbod " + rndAanbod.toString();
    newAanbodComp.x = 0;
    newAanbodComp.y = newHeroComp.height + 220;
    var newDienstenComp = dienstenComp.createInstance();
    newDienstenComp.name = "Diensten " + rndDiensten.toString();
    newDienstenComp.x = 0;
    newDienstenComp.y = newHeroComp.height + 1329;
    var newFooterComp = footerComp.createInstance();
    newFooterComp.name = "Footer " + rndFooter.toString();
    newFooterComp.x = 0;
    newFooterComp.y = newDienstenComp.height + 2273;
    figma.currentPage.appendChild(newFooterComp);
    figma.currentPage.appendChild(newDienstenComp);
    figma.currentPage.appendChild(newAanbodComp);
    figma.currentPage.appendChild(newHeaderComp);
    figma.currentPage.appendChild(newHeroComp);
    nodes.push(newAanbodComp);
    nodes.push(newHeroComp);
    nodes.push(newDienstenComp);
    nodes.push(newFooterComp);
    nodes.push(newHeaderComp);
    //figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
    /* if (rnd == 1)
    {
      headerComp = headersSet.findChild(n => n.name == "Header 1") as ComponentNode;
      footerComp = footersSet.findChild(n => n.name == "Footer 1") as ComponentNode;
      name = "Footer 1";
    }
  
  
    if (rnd == 2)
    {
      headerComp = headersSet.findChild(n => n.name == "Header 2") as ComponentNode;
      footerComp = footersSet.findChild(n => n.name == "Footer 2") as ComponentNode;
      name = "Footer 2";
    }
  
  
    if (rnd == 3)
    {
      headerComp = headersSet.findChild(n => n.name == "Header 3") as ComponentNode;
      footerComp = footersSet.findChild(n => n.name == "Footer 3") as ComponentNode;
      name = "Footer 3";
    } */
});
