import hashlib as hasher


def hashgenerator(data):
    result = hasher.sha256(data.encode())
    return result.hexdigest()


class Block:
    def __init__(self, data, hash, pre_hash):
        self.data = data
        self.hash = hash
        self.pre_hash = pre_hash


class BlockChain:
    def __init__(self):
        hashlast = hashgenerator("genesis_last")
        hashfirst = hashgenerator("genesis_first")

        genesis_block = Block("genesis_dataABC", hashlast, hashfirst)
        self.chain = [genesis_block]

    def add_block(self, data):
        prev_hash = self.chain[-1].hash
        hash = hashgenerator(data + prev_hash)
        block = Block(data, hash, prev_hash)
        self.chain.append(block)


bc = BlockChain()
bc.add_block("first")
bc.add_block("second")
bc.add_block("third")

for block in bc.chain:
    print(block.__dict__)
