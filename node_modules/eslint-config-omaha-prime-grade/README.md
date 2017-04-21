<div align="center">
    <a href="https://omaha.js.org/"><img src="https://omaha.js.org/assets/images/logo.png?v=1.0" alt="OMAHA JS" height="225"/></a>
</div>

eslint-config-omaha-prime-grade [![npm](https://img.shields.io/npm/v/eslint-config-omaha-prime-grade.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-omaha-prime-grade) [![npm](https://img.shields.io/npm/l/eslint-config-omaha-prime-grade.svg?maxAge=2592000?style=flat-square)](https://github.com/omahajs/eslint-config-omaha-prime-grade/blob/master/LICENSE)
===============================
> Shareable ESLint config to make "Prime Grade" quality code

Getting Started
---------------
> It is assumed that you have already configured your project to use ESLint.  If this is not
the case, please see the [ESLint documentation](http://eslint.org/docs/user-guide/configuring).

- Add **omaha-prime-grade** to the `extends` attribute of your ESLint configuration object

*JavaScript*
```javascript
module.exports = {
    extends: 'omaha-prime-grade'
};
```
*JSON*
```json
{
    "extends": "omaha-prime-grade"
}
```

- **Smile**. You are done. Your code will thank you later.

> All rules promote writing *better* code, but ***[some](RULES_FOR_SECURITY.md)*** address [MITRE](https://cwe.mitre.org/) defined software weaknesses too.


Why "Prime Grade"?
------------------
- Omaha is known for its [high quality steak](http://www.omahasteaks.com/buy/Steaks).
- Omaha should be known for just **high quality** (or at least high quality steak **and** code).
- After ruminating on the concept of "high quality beef", I found that beef has some [serious quality metrics](https://meat.tamu.edu/beefgrading/).
- As a resident engineer of Omaha that loves high quality and the metrics that maintain it...Applying the concept of "Prime Grade" to code seemed like a fairly obvious thing to do :smile:
- Generally, "Prime Grade Code" is **sustainable** ([secure](RULES_FOR_SECURITY.md) and maintainable)
