'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 20;
var TEXT_HEIGHT = 15;
var TEXT_WIDTH = 30;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - GAP);

    if (names[i]=='Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, '+ Math.round(Math.random()*100) +'%, 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - GAP/2 - TEXT_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT*times[i])/maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - GAP*2.5  -(BAR_HEIGHT*times[i])/maxTime);


  }
};
