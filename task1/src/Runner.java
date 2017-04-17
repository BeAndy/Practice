import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;


/**
 * Created by Andrew on 2/10/2017.
 */
/*
class Tree {
    public static class Node {
        int key;
        Node left;
        Node right;
        int height;
        int MSL;
        boolean isUsed = false;

        Node(int key) {
            this.key = key;
            height = 0;
            MSL = 0;
        }
    }


    public List<Integer> markedKeyList = new LinkedList<>();
    public List<Integer> keyList = new LinkedList<>();

    public Node root;
    public int maxMSL;
    List<Node> mslList = new ArrayList<>();

    int minKey = 0;
    int prevMinKey = 0;

    public void getMarkedKeyList(Node currentNode) throws Exception {
        if (currentNode != null) {
            if (currentNode.isUsed) {
                markedKeyList.add(currentNode.key);
            }
            getMarkedKeyList(currentNode.left);
            getMarkedKeyList(currentNode.right);
        }
    }

    public void getKeyList(Node currentNode) throws Exception {
        if (currentNode != null) {
            keyList.add(currentNode.key);
            getKeyList(currentNode.left);
            getKeyList(currentNode.right);
        }
    }

    public void getMslHeight(Node currentNode) throws Exception {
        if (currentNode != null) {
            getMslHeight(currentNode.left);
            getMslHeight(currentNode.right);
            currentNode.height = getHeight(currentNode);
            currentNode.MSL = getMSL(currentNode);
            if (currentNode.MSL > maxMSL) {
                maxMSL = currentNode.MSL;
            }
            System.out.println(currentNode.key + " height " + currentNode.height + " MSL " + currentNode.MSL);
        }
    }

    public void getMaxMslList(Node currentNode) throws Exception {
        if (currentNode != null) {
            getMaxMslList(currentNode.left);
            getMaxMslList(currentNode.right);
            if (currentNode.MSL == maxMSL) {
                mslList.add(currentNode);
            }
        }
    }

    public void printUsed(Node currentNode) throws Exception {
        if (currentNode != null) {
            printUsed(currentNode.left);
            printUsed(currentNode.right);
            System.out.println(currentNode.key + " used " + currentNode.isUsed);
        }
    }

    public Node find_min(Node currentNode) throws Exception {
        if (currentNode.left != null) {
            return find_min(currentNode.left);
        } else
            return currentNode;
    }

    public Node deleteRecursively(Node currentNode, int x) throws Exception {
        if (x < currentNode.key) {
            currentNode.left = deleteRecursively(currentNode.left, x);
            return currentNode;
        }
        if (x > currentNode.key) {
            currentNode.right = deleteRecursively(currentNode.right, x);
            return currentNode;
        }
        if (currentNode.left == null) {
            return currentNode.right;
        } else if (currentNode.right == null) {
            return currentNode.left;
        } else {
            int min_key = find_min(currentNode.right).key;
            currentNode.key = min_key;
            currentNode.right = deleteRecursively(currentNode.right, min_key);
            return currentNode;
        }
    }


    public void deleteNode(int delNodeKey) throws Exception {
        root = deleteRecursively(root, delNodeKey);
    }

    public void insert(int insNode) throws Exception {
        root = nodeInsert(root, insNode);
    }

    private static Node nodeInsert(Node node, int insNodeKey) throws Exception {
        if (node == null) {
            return new Node(insNodeKey);
        }
        if (insNodeKey < node.key) {
            node.left = nodeInsert(node.left, insNodeKey);
        } else if (insNodeKey > node.key) {
            node.right = nodeInsert(node.right, insNodeKey);
        }
        return node;
    }

    public int getHeight(Node node) throws Exception {
        if (node.left == null && node.right == null) {
            return 0;
        } else {
            if (node.left == null) {
                return node.right.height + 1;
            }
            if (node.right == null) {
                return node.left.height + 1;
            }
            return Math.max(node.right.height, node.left.height) + 1;
        }
    }

    public int getMSL(Node node) throws Exception {
        if (node == null) return 0;
        if (node.left == null && node.right == null) {
            return 0;
        } else {
            if (node.left == null) {
                return node.right.height + 1;
            }
            if (node.right == null) {
                return node.left.height + 1;
            }
            return node.right.height + node.left.height + 2;
        }
    }

    public void markNodes(Node currentNode) throws Exception {
        while ((currentNode.left != null) || (currentNode.right != null)) {
            currentNode.isUsed = true;
            if (currentNode.key < minKey) {
                prevMinKey = minKey;
                minKey = currentNode.key;
            } else if (currentNode.key < prevMinKey) {
                prevMinKey = currentNode.key;
            }
            if (currentNode.left == null) {
                currentNode = currentNode.right;
                continue;
            }
            if (currentNode.right == null) {
                currentNode = currentNode.left;
                continue;
            }
            if (currentNode.left.height > currentNode.right.height) {
                currentNode = currentNode.left;
                continue;
            }
            if (currentNode.left.height < currentNode.right.height) {
                currentNode = currentNode.right;
                continue;
            }
            if (currentNode.left.height == currentNode.right.height) {
                markNodes(currentNode.left);
                currentNode = currentNode.right;
            }
        }
        currentNode.isUsed = true;
        if (currentNode.key < minKey) {
            prevMinKey = minKey;
            minKey = currentNode.key;
        } else if (currentNode.key < prevMinKey) {
            prevMinKey = currentNode.key;
        }
    }
}

*/
public class Runner{
    private static final String INPUT = "in.txt";
    private static final String OUTPUT = "out.txt";

    private static void  getArray(String files) throws Exception {
        BufferedReader reader = new BufferedReader(new FileReader(new File(files)));
        String currentElement = reader.readLine();
        while (currentElement != null) {
            System.out.println(Integer.parseInt(currentElement));
            currentElement = reader.readLine();
        }
        reader.close();
    }

    private static void writeData(List<Integer> keyList) throws Exception {
        FileWriter treeWriter = new FileWriter(new File(OUTPUT));
        for (int currentKey : keyList) {
            treeWriter.write(String.valueOf(currentKey));
            treeWriter.write(System.lineSeparator());
        }
        treeWriter.close();
    }
}
