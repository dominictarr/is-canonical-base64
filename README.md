# is-canonical-base64

a regular expression to test wether a string is a valid base64,
without ambiguity.

Base64 encodes bytes (base 256, 8 bits each) as chars each representing
6 bits. That means a one byte buffer necessarily becomes 2 chars,
except only the top 2 bits of the last char are used (and the string
is then padded with an `==` to take the spaces those chars would be)

It's _recommended_ that implementations encode zeros here, but many
implementations (including node.js's) accept non-zeros here, but just
ignore them.

This can be a problem for _signed data_, because if the signature
signs base64, you must retain exactly the encoded representation
(including any ambiguity). So, it's good to enforce that ambigious
representations are rejected.


## License

MIT
