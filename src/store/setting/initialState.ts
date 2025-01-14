import { DeepPartial } from 'utility-types';

import {
  Ai360ProviderCard,
  AnthropicProviderCard,
  BaichuanProviderCard,
  BedrockProviderCard,
  DEFAULT_MODEL_PROVIDER_LIST,
  DeepSeekProviderCard,
  FireworksAIProviderCard,
  GithubProviderCard,
  GoogleProviderCard,
  GroqProviderCard,
  HuggingFaceProviderCard,
  HunyuanProviderCard,
  MinimaxProviderCard,
  MoonshotProviderCard,
  NovitaProviderCard,
  OllamaProviderCard,
  OpenAIProviderCard,
  OpenRouterProviderCard,
  PerplexityProviderCard,
  QwenProviderCard,
  SenseNovaProviderCard,
  SparkProviderCard,
  StepfunProviderCard,
  TogetherAIProviderCard,
  WenxinProviderCard,
  ZeroOneProviderCard,
  ZhiPuProviderCard,
  filterEnabledModels,
} from '@/config/modelProviders';
import {
  DEFAULT_TOUCH_ACTION_CONFIG_FEMALE,
  DEFAULT_TOUCH_ACTION_CONFIG_MALE,
} from '@/constants/touch';
import { GenderEnum } from '@/types/agent';
import { Config } from '@/types/config';
import { ModelProviderCard } from '@/types/llm';

export interface SettingState {
  config: DeepPartial<Config>;
  defaultConfig: Config;
  defaultModelProviderList: ModelProviderCard[];
  editingCustomCardModel?: { id: string; provider: string } | undefined;
  modelProviderList: ModelProviderCard[];
}

const initialState: SettingState = {
  modelProviderList: DEFAULT_MODEL_PROVIDER_LIST,
  defaultModelProviderList: DEFAULT_MODEL_PROVIDER_LIST,
  defaultConfig: {
    keyVaults: {},
    locale: 'auto',
    backgroundEffect: 'glow',
    tts: {
      // 默认不启用客户端调用，本地调试时启用，等后续有成熟的解决方案再启用
      clientCall: false,
    },
    languageModel: {
      ai360: {
        enabled: false,
        enabledModels: filterEnabledModels(Ai360ProviderCard),
      },
      anthropic: {
        enabled: false,
        enabledModels: filterEnabledModels(AnthropicProviderCard),
      },
      azure: {
        enabled: false,
      },
      baichuan: {
        enabled: false,
        enabledModels: filterEnabledModels(BaichuanProviderCard),
      },
      bedrock: {
        enabled: false,
        enabledModels: filterEnabledModels(BedrockProviderCard),
      },
      deepseek: {
        enabled: false,
        enabledModels: filterEnabledModels(DeepSeekProviderCard),
      },
      fireworksai: {
        enabled: false,
        enabledModels: filterEnabledModels(FireworksAIProviderCard),
      },
      github: {
        enabled: false,
        enabledModels: filterEnabledModels(GithubProviderCard),
      },
      google: {
        enabled: false,
        enabledModels: filterEnabledModels(GoogleProviderCard),
      },
      groq: {
        enabled: false,
        enabledModels: filterEnabledModels(GroqProviderCard),
      },
      huggingface: {
        enabled: false,
        enabledModels: filterEnabledModels(HuggingFaceProviderCard),
      },
      hunyuan: {
        enabled: false,
        enabledModels: filterEnabledModels(HunyuanProviderCard),
      },
      minimax: {
        enabled: false,
        enabledModels: filterEnabledModels(MinimaxProviderCard),
      },
      moonshot: {
        enabled: false,
        enabledModels: filterEnabledModels(MoonshotProviderCard),
      },
      novita: {
        enabled: false,
        enabledModels: filterEnabledModels(NovitaProviderCard),
      },
      ollama: {
        enabled: true,
        enabledModels: filterEnabledModels(OllamaProviderCard),
        fetchOnClient: true,
      },
      openai: {
        enabled: true,
        enabledModels: filterEnabledModels(OpenAIProviderCard),
      },
      openrouter: {
        enabled: false,
        enabledModels: filterEnabledModels(OpenRouterProviderCard),
      },
      perplexity: {
        enabled: false,
        enabledModels: filterEnabledModels(PerplexityProviderCard),
      },
      qwen: {
        enabled: false,
        enabledModels: filterEnabledModels(QwenProviderCard),
      },
      sensenova: {
        enabled: false,
        enabledModels: filterEnabledModels(SenseNovaProviderCard),
      },
      spark: {
        enabled: false,
        enabledModels: filterEnabledModels(SparkProviderCard),
      },
      stepfun: {
        enabled: false,
        enabledModels: filterEnabledModels(StepfunProviderCard),
      },
      togetherai: {
        enabled: false,
        enabledModels: filterEnabledModels(TogetherAIProviderCard),
      },
      wenxin: {
        enabled: false,
        enabledModels: filterEnabledModels(WenxinProviderCard),
      },
      zeroone: {
        enabled: false,
        enabledModels: filterEnabledModels(ZeroOneProviderCard),
      },
      zhipu: {
        enabled: false,
        enabledModels: filterEnabledModels(ZhiPuProviderCard),
      },
    },
    touch: {
      [GenderEnum.FEMALE]: DEFAULT_TOUCH_ACTION_CONFIG_FEMALE,
      [GenderEnum.MALE]: DEFAULT_TOUCH_ACTION_CONFIG_MALE,
    },
  },
  config: {},
};

export { initialState };
