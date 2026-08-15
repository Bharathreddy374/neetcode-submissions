class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ""

        for word in strs:
            result += str(len(word)) + "#" + word

        return result

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0

        while i < len(s):
            j = i

            # Find the '#'
            while s[j] != '#':
                j += 1

            length = int(s[i:j])

            # Start of actual word
            start = j + 1

            # Extract exactly 'length' characters
            word = s[start:start + length]
            result.append(word)

            # Move to next encoded word
            i = start + length

        return result