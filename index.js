var blessed = require("blessed");
var contrib = require("blessed-contrib");
var screen = blessed.screen();

var grid = new contrib.grid({ rows: 12, cols: 12, screen: screen });
//grid.set(row, col, rowSpan, colSpan, obj, opts)
var map = grid.set(0, 0, 4, 4, contrib.map, { label: "World Map" });
var box = grid.set(4, 4, 4, 4, blessed.box, { content: "My Box" });

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});


screen.render();