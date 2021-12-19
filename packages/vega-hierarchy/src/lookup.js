// Build lookup table mapping tuple keys to tree node instances
export default function(tree, key, filter) {
  const map = {};
  var pre_traversal_id = -1;
  tree.eachBefore(node => {
    const t = node.data;
    node.data.pre_traversal_id = ++pre_traversal_id;
    if (filter(t)) map[key(t)] = node;
  });
  tree.lookup = map;
  return tree;
}
