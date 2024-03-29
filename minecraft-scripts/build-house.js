// This function builds a house with the specified dimensions using the provided player object
function buildHouse(player, width, height, depth) {
  // Build the walls
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let z = 0; z < depth; z++) {
        if (x == 0 || x == width - 1 || z == 0 || z == depth - 1 || y == 0 || y == height - 1) {
          // If we're on the edge, build a wall
          player.placeBlock(x, y, z, 'stone');
        } else {
          // Otherwise, build the floor and ceiling with wood planks
          player.placeBlock(x, y, z, 'planks_oak');
        }
      }
    }
  }

  // Build the roof
  for (let x = 0; x < width; x++) {
    for (let z = 0; z < depth; z++) {
      player.placeBlock(x, height, z, 'stone');
    }
  }
}

// Create a player object
const player = {
  placeBlock: function(x, y, z, blockType) {
    // This function simulates placing a block of the specified type at the specified location
    console.log(`Placing block of type ${blockType} at (${x}, ${y}, ${z})`);
  }
};

// Call the function to build a 10x6x8 house
buildHouse(player, 10, 6, 8);
