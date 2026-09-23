/* Public release metadata only. Never put credentials or private repository URLs here. */
window.JCORE_CONFIG = Object.freeze({
  githubOwner: 'jay-Kim4776',
  releaseRepository: 'JCore-Releases',
  timeoutMs: 6000,
  fallback: {
    tag: 'v1.0.25', version: '1.0.25',
    assets: { runtime: 'JCore-Setup.exe', manual: 'JCore_User_Manual_1.0.25.pdf', client: 'JCoreClient.zip', brochure: 'JAYON.pptx' }
  },
  assets: {
    runtime: { names: ['JCore-Setup.exe', 'JCore.msi'], pattern: /^JCore-\d+\.\d+\.\d+-x64\.msi$/i },
    client: { names: ['JCoreClient.zip'], pattern: /^JCoreClient-\d+\.\d+\.\d+\.zip$/i },
    brochure: { names: ['JCore-Product-Brochure.pdf', 'JAYON.pptx'] },
    manual: { names: ['JCore-Manual.pdf'], pattern: /^JCore_User_Manual_\d+\.\d+\.\d+\.pdf$/i }
  }
});
