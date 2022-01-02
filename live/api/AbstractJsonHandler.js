const fs = require('fs-extra');
const path = require('path');
/**
 * Abstracted class for handle syncing JSON files with in-app memory.
 */
class AbstractJsonHandler {
  /**
   * Creates a new Abstract JSON Handler instance.
   */
  constructor(filePath) {
    this.data = {};
    this.filePath = filePath;
  }
  /**
   * Ensures the file exists on disk.
   */
  async diskInit() {
    if (!await fs.pathExists(this.filePath)) {
      await fs.ensureDir(path.dirname(this.filePath));
      await fs.writeJson(this.filePath, {}, { spaces: 2 });
    }
  }
  /**
   * Reads the file and returns whatever is currently on disk. If there is a
   * failure (such as the file does not exist) an empty object is returned.
   */
  async diskRead() {
    try {
      const obj = await fs.readJson(this.filePath);
      return obj;
    } catch (err) {
      console.log(err);
      return {};
    }
  }
  /**
   * Writes the in-memory data to disk. Creates a temporary journal file to
   * prevent losing data on write failures.
   */
  async diskWrite(obj) {
    try {
      await fs.writeJson(this.filePath, obj, { spaces: 2 });
    } catch (err) {
      console.log(err);
    }
  }
  /**
   * Returns the current in-memory value.
   */
  getData() {
    return { ...this.data };
  }
  /**
   * Returns the instance's working file path.
   */
  getFilePath() {
    return this.filePath;
  }
  /**
   * Handles initializing, performs an initial reads and starts watching.
   */
  async init() {
    await this.diskInit();
    this.data = await this.diskRead();
  }
  /**
   * Overwrites the file using a partial JSON modification.
   */
  patchData(patchObject) {
    const newObj = { ...this.data, ...patchObject };
    this.data = newObj;
    return this.setData(newObj);
  }
  /**
   * Overwrites the file using a total JSON modification.
   */
  setData(obj) {
    this.data = obj;
    void this.diskWrite(obj);
    return obj;
  }
}
module.exports = AbstractJsonHandler;
