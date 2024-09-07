import { IFFmpegConfiguration } from '../interfaces';

/**
 * Defines all available extensions of the
 * extended gpl non free ffmpeg configuration.
 */
export type ExtensionGPLExtended = 'ac3' | 'adx' | 'aif' | 'aiff' | 'afc' | 'aifc' | 'al' | 'amr' | 'apng' | 'aptx' | 'aptxhd' | 'asf' | 'wmv' | 'wma' | 'ass' | 'ssa' | 'ast' | 'au' | 'avi' | 'avs' | 'avs2' | 'bit' | 'caf' | 'cavs' | 'c2' | '302' | 'drc' | 'vc2' | 'dnxhd' | 'dnxhr' | 'dts' | 'dv' | 'eac3' | 'ffmeta' | 'cpk' | 'flm' | 'fits' | 'flac' | 'flv' | 'g722' | 'tco' | 'rco' | 'gif' | 'gsm' | 'gxf' | 'h261' | 'h263' | 'h264' | '264' | 'hevc' | 'h265' | '265' | 'm3u8' | 'lbc' | 'ivf' | 'vag' | 'm4v' | 'm4a' | 'sub' | 'mjpg' | 'mjpeg' | 'mlp' | 'mmf' | 'mp3' | 'mp4' | 'mpg' | 'mpeg' | 'mkv' | 'mov' | 'ts' | 'm2t' | 'm2ts' | 'mts' | 'ul' | 'mxf' | 'nut' | 'ogg' | 'oma' | 'yuv' | 'rgb' | 'rm' | 'ra' | 'roq' | 'rso' | 'sw' | 'sb' | 'sbc' | 'msbc' | 'scc' | 'sox' | 'spdif' | 'srt' | 'sup' | 'swf' | 'thd' | 'tta' | 'uw' | 'ub' | 'vc1' | 'rcv' | 'voc' | 'w64' | 'wav' | 'xml' | 'vtt' | 'wtv' | 'wv' | 'y4m';
/**
 * Defines all available audio encoders of the
 * extended gpl non free ffmpeg configuration.
 */
export type AudioEncoderGPLExtended = 'aac' | 'ac3' | 'adpcm_adx' | 'adpcm_g722' | 'adpcm_g726' | 'adpcm_g726le' | 'adpcm_ima_qt' | 'adpcm_ima_ssi' | 'adpcm_ima_wav' | 'adpcm_ms' | 'adpcm_swf' | 'adpcm_yamaha' | 'alac' | 'aptx' | 'aptx_hd' | 'comfortnoise' | 'dts' | 'eac3' | 'flac' | 'g723_1' | 'mlp' | 'mp2' | 'mp3' | 'nellymoser' | 'opus' | 'pcm_alaw' | 'pcm_dvd' | 'pcm_f32be' | 'pcm_f32le' | 'pcm_f64be' | 'pcm_f64le' | 'pcm_mulaw' | 'pcm_s16be' | 'pcm_s16be_planar' | 'pcm_s16le' | 'pcm_s16le_planar' | 'pcm_s24be' | 'pcm_s24daud' | 'pcm_s24le' | 'pcm_s24le_planar' | 'pcm_s32be' | 'pcm_s32le' | 'pcm_s32le_planar' | 'pcm_s64be' | 'pcm_s64le' | 'pcm_s8' | 'pcm_s8_planar' | 'pcm_u16be' | 'pcm_u16le' | 'pcm_u24be' | 'pcm_u24le' | 'pcm_u32be' | 'pcm_u32le' | 'pcm_u8' | 'pcm_vidc' | 'ra_144' | 'roq_dpcm' | 's302m' | 'sbc' | 'sonic' | 'sonicls' | 'truehd' | 'tta' | 'vorbis' | 'wavpack' | 'wmav1' | 'wmav2';
/**
 * Defines all available video encoders of the
 * extended gpl non free ffmpeg configuration.
 */
export type VideoEncoderGPLExtended = 'a64_multi' | 'a64_multi5' | 'alias_pix' | 'amv' | 'apng' | 'asv1' | 'asv2' | 'avrp' | 'avui' | 'ayuv' | 'bmp' | 'cinepak' | 'cljr' | 'dirac' | 'dnxhd' | 'dpx' | 'dvvideo' | 'ffv1' | 'ffvhuff' | 'fits' | 'flashsv' | 'flashsv2' | 'flv1' | 'gif' | 'h261' | 'h263' | 'h263p' | 'h264' | 'hevc' | 'huffyuv' | 'jpeg2000' | 'jpegls' | 'ljpeg' | 'magicyuv' | 'mjpeg' | 'mpeg1video' | 'mpeg2video' | 'mpeg4' | 'msmpeg4v2' | 'msmpeg4v3' | 'msvideo1' | 'pam' | 'pbm' | 'pcx' | 'pgm' | 'pgmyuv' | 'png' | 'ppm' | 'prores' | 'qtrle' | 'r10k' | 'r210' | 'rawvideo' | 'roq' | 'rv10' | 'rv20' | 'sgi' | 'snow' | 'sunrast' | 'svq1' | 'targa' | 'theora' | 'tiff' | 'utvideo' | 'v210' | 'v308' | 'v408' | 'v410' | 'vp8' | 'vp9' | 'webp' | 'wmv1' | 'wmv2' | 'webm' | 'wrapped_avframe' | 'xbm' | 'xface' | 'xwd' | 'y41p' | 'yuv4' | 'zlib' | 'zmbv';
/**
 * Defines the typing of the extended gpl
 * non free ffmpeg configuration.
 */
export type FFmpegConfigurationGPLExtended = IFFmpegConfiguration<ExtensionGPLExtended, AudioEncoderGPLExtended, VideoEncoderGPLExtended>;
