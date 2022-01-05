import Blockly, { Block } from "blockly";
import ReactBlockly from "react-blockly";

import "./App.css";

interface ToolboxCategory {
  name: string;
  custom?: CustomToolboxCategory;
  blocks: ToolboxBlock[];
}

interface ToolboxBlock {
  type: string;
  colour?: string;
}

type CustomToolboxCategory = "VARIABLE | PROCEDURE";

const TOOLBOX_CATEGORIES: ToolboxCategory[] = [
  {
    name: "Blocos",
    blocks: [
      // type: "set_color",
      { type: "text" },
      { type: "controls_repeat_ext" },
    ],
  },
];

const INITIAL_XML = `
  <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="text" x="100" y="50">
      <field name="TEXT">Criado com sucesso!</field>
    </block>
    
    <block type="set_color" x="100" y="100">
      <field name="PRECO"></field>
      <field name="IPI"></field>
      <field name="PRECO_FINAL"></field>
    </block>

    <block type="teste" x="100" y="150">
      <field name="PRECO"></field>
      <field name="IPI"></field>
      <field name="PRECO_FINAL"></field>
    </block>
  </xml>
`;

Blockly.Blocks["set_color"] = {
  init: function () {
    let block = this as Block;
    block.appendDummyInput().appendField("Informe os valores");
    block.appendValueInput("H").setCheck(null).appendField("Preço");
    block.appendValueInput("IPI").setCheck(null).appendField("S");
    block.appendValueInput("PRECO_FINAL").setCheck(null).appendField("B");
    block.setInputsInline(true);
    block.setColour(230);
    block.setTooltip("");
  },
};

Blockly.Blocks["teste"] = {
  init: function () {
    let block = this as Block;
    block.appendDummyInput().appendField("Informe os valores");
    block.appendValueInput("H").setCheck(null).appendField("Preço");
    block.appendValueInput("IPI").setCheck(null).appendField("S");
    block.appendValueInput("PRECO_FINAL").setCheck(null).appendField("B");
    block.setInputsInline(true);
  },
};

Blockly.Blocks["block_type"] = {
  init: function () {
    let block = this as Block;
    block.setTooltip("");
    block.setHelpUrl("120");
  },
};

function App() {
  return (
    <div className="App">
      <ReactBlockly
        wrapperDivClassName="fill-height"
        toolboxCategories={TOOLBOX_CATEGORIES}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            lenght: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        initialXml={INITIAL_XML}
      />
    </div>
  );
}

export default App;
