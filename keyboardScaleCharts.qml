//=============================================================================
//  MuseScore
//  Music Composition & Notation
//
//  Keyboard Scale Charts Plugin
//
//  Copyright (C) 2023 Daniel Marty

//  Based on the work https://musescore.org/en/project/piano-keyboard-diagram
//  and on the Font from Jochen Pietsch https://www.fontspace.com/keyboard-chord-diagram-font-f25876

//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2
//  as published by the Free Software Foundation and appearing in
//  the file LICENCE.GPL
//=============================================================================

import QtQuick 2.2
import MuseScore 3.0
import "keyboardScaleCharts.js" as KeyboardScaleCharts

MuseScore {
   version: "1.0"
   title: "Plugins.Keyboard." + "ScaleCharts"
   id: mainWindow

   Component.onCompleted : {
      if (mscoreMajorVersion >= 4) {
         mainWindow.title = "KeyboardScaleCharts";
         mainWindow.thumbnailName = "logo.png";
         mainWindow.categoryCode = "diagrams";
      }
   }

   function getScaleCharts(key) {
      return KeyboardScaleCharts.getScaleCharts(key);
   }

   function getUsedKeys(curScore) {
      let cursor = curScore.newCursor();
      cursor.rewind(0); // beginning of score

      let keys = []
      do {
         const key = cursor.keySignature;
         if (keys.indexOf(key) === -1) {
            keys.push(key);
         }
      } while(cursor.next());
      return keys;
   }

   function getMethods(obj) {
      var result = [];
      for (var id in obj) {
         try {
            if (typeof(obj[id]) == "function") {
            result.push(id + ": " + obj[id].toString());
            }
         } catch (err) {
            result.push(id + ": inaccessible");
         }
      }
      return result;
   }

   function getKeys(obj) {
      var keys = [];
      for(var key in obj){
         keys.push(key);
      }
      return keys;
   }

   function getScaleText(scale, scaleChart) {
      let scaleText = newElement(Element.SYSTEM_TEXT);
      scaleText.text = '<font size="10"/>' + scale.name + " " + '<font face="Keyboard Chord Diagram"/><font size="23"/>' + scaleChart + '<font size="10"/> (' + scale.lhFingering + ") (" + scale.rhFingering + ")";
      scaleText.fontSize *= 1.75;
      scaleText.placement = Placement.ABOVE;
      return scaleText;
   }
   onRun: {
      curScore.startCmd()

      const keys = getUsedKeys(curScore);
      console.log("Used keys : " + keys);
      

      let cursor = curScore.newCursor();
      cursor.rewind(0);

      keys.forEach(addScale);

      function addScale(item) {
         const scaleCharts = getScaleCharts(item);

         const minorScaleText = getScaleText(scaleCharts.minorScale, scaleCharts.minorScaleChart);
         cursor.add(minorScaleText);

         const majorScaleText = getScaleText(scaleCharts.majorScale, scaleCharts.majorScaleChart);
         cursor.add(majorScaleText);
      }

      curScore.endCmd();
      return;
   }
}
