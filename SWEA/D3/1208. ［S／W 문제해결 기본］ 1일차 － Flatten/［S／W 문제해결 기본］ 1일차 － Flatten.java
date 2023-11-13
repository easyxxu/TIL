import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		for(int tc=1;tc<=10;tc++) {
			int dumpCnt = Integer.parseInt(br.readLine());
			st = new StringTokenizer(br.readLine());
			int[] arr = new int[100];
			int max = 0, min = 100, maxIdx = 0, minIdx=0;
			int result = 0;
			
			// 배열에 담기
			for(int i=0;i<100;i++) {
				arr[i] = Integer.parseInt(st.nextToken());
				max = Math.max(arr[i], max);
				min = Math.min(arr[i], min);
				if(arr[i] == max) {
					maxIdx = i;
				}
				if(arr[i] == min) {
					minIdx = i;
				}
			}
			
			// 평탄화
			while(dumpCnt != 0) {
				arr[maxIdx] -= 1;
				arr[minIdx] += 1;
				dumpCnt--;
				
				// 평탄화 작업이후 다시 최대값, 최소값 찾기
				max = 0;
				min = 100;
				for(int i=0;i<100;i++) {
					max = Math.max(arr[i], max);
					min = Math.min(arr[i], min);
					if(arr[i] == max) {
						maxIdx = i;
					}
					if(arr[i] == min) {
						minIdx = i;
					}
				}
			}
			
			for(int i=0;i<100;i++) {
				max = Math.max(arr[i], max);
				min = Math.min(arr[i], min);
			}
			
			result = max - min;
			sb.append("#"+tc+" "+result+"\n");
		}
		System.out.print(sb);
	}
}