export default function render(templateLiteral, targetNode = this.root) {
    targetNode.innerHTML += templateLiteral;
}
