/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "extensionID",
                "name": "Extension",
                "color1": "#0fbd8c",
                "blocks": [{
                    "opcode": "block_b100b4ce71d62eb3",
                    "text": "the negative of (dosent turn negavties positive) [4e16cc3aa853b90e]",
                    "blockType": "reporter",
                    "arguments": {
                        "4e16cc3aa853b90e": {
                            "type": "number",
                            "defaultValue": 60
                        }
                    }
                }, {
                    "opcode": "block_a57f9a147ebb75f8",
                    "text": "[9af9fd261af3bdfc]",
                    "blockType": "reporter",
                    "arguments": {
                        "9af9fd261af3bdfc": {
                            "type": "Boolean"
                        }
                    }
                }, {
                    "opcode": "block_0fc5ae293b1b4ca2",
                    "text": "not this [9c4cec75e850a950] and not that [e6555118bbf00b2d]",
                    "blockType": "Boolean",
                    "arguments": {
                        "9c4cec75e850a950": {
                            "type": "Boolean"
                        },
                        "e6555118bbf00b2d": {
                            "type": "Boolean"
                        }
                    }
                }]
            }
        }
        async block_b100b4ce71d62eb3(args) {
            if ((args["4e16cc3aa853b90e"] > (0))) {
                return (((0) - args["4e16cc3aa853b90e"]))
            } else {
                if ((args["4e16cc3aa853b90e"] == ("0"))) {
                    return (("invalid"))
                } else {
                    return (args["4e16cc3aa853b90e"])
                };
            };
        }
        async block_a57f9a147ebb75f8(args) {
            return (args["9af9fd261af3bdfc"])
        }
        async block_0fc5ae293b1b4ca2(args) {
            return (((!args["9c4cec75e850a950"]) && (!args["e6555118bbf00b2d"])))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);
